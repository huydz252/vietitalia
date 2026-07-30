import '../css/style.css'; // Giữ lại dòng này nếu cậu đang dùng cách nạp CSS qua JS

const API_URL = 'http://localhost:5000/api'; 

// ==========================================
// 1. XỬ LÝ FORM SỰ KIỆN (Đã nâng cấp Upload File)
// ==========================================
const eventForm = document.getElementById('addEventForm'); 

eventForm.addEventListener('submit', async (e) => { 
    e.preventDefault(); 

    // Khởi tạo FormData thay cho JSON object để chứa được file
    const formData = new FormData();
    formData.append('title', document.getElementById('event_title').value); 
    formData.append('location', document.getElementById('event_location').value); 
    const dateVal = document.getElementById('event_date').value; 
    if (dateVal) formData.append('event_date', dateVal);
    
    formData.append('description', document.getElementById('event_description').value); 
    formData.append('status', 'upcoming'); 

    const fileInput = document.getElementById('event_image_file'); 
    if (fileInput && fileInput.files.length > 0) {
        formData.append('image', fileInput.files[0]); // Tên biến 'image' phải khớp với upload.single('image') ở Backend
    }

    try {
        const response = await fetch(`${API_URL}/events`, { 
            method: 'POST', 
            body: formData
        });

        const result = await response.json(); 

        if (result.success) { 
            alert('🎉 Đã thêm SỰ KIỆN và TẢI MEDIA thành công!');
            eventForm.reset();  
        } else {
            alert('❌ Lỗi lưu sự kiện: ' + result.message); 
        }
    } catch (error) { 
        console.error('Lỗi API:', error); 
        alert('❌ Không thể kết nối tới Server!'); 
    }
});

const travelForm = document.getElementById('addTravelForm'); 

travelForm.addEventListener('submit', async (e) => { 
    e.preventDefault(); 

    const titleVal = document.getElementById('travel_title').value; 
    let slugVal = document.getElementById('travel_slug').value; 
    
    if (!slugVal) { 
        slugVal = titleVal.toLowerCase() 
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
            .replace(/[^a-z0-9 -]/g, '') 
            .replace(/\s+/g, '-') 
            .replace(/-+/g, '-'); 
    }

    // Sử dụng FormData để gom cả chữ lẫn file ảnh gửi đi
    const formData = new FormData();
    formData.append('title', titleVal);
    formData.append('slug', slugVal);
    formData.append('category', document.getElementById('travel_category').value);
    formData.append('content', document.getElementById('travel_content').value);

    // Bắt đúng file từ ô input của phần du lịch
    const fileInput = document.getElementById('travel_thumbnail_file');
    if (fileInput && fileInput.files.length > 0) {
        // Tên 'thumbnail' phải khớp với upload.single('thumbnail') ở Backend/travelRoutes.js
        formData.append('thumbnail', fileInput.files[0]); 
    }

    try {
        const response = await fetch(`${API_URL}/travels`, { 
            method: 'POST', 
            body: formData 
        });

        const result = await response.json(); 

        if (result.success) { 
            alert('✈️ Đã thêm BÀI DU LỊCH và TẢI ẢNH thành công!'); 
            travelForm.reset();  
        } else {
            alert('❌ Lỗi lưu bài viết: ' + result.message); 
        }
    } catch (error) { 
        console.error('Lỗi API:', error); 
        alert('❌ Không thể kết nối tới Server!'); 
    }
});