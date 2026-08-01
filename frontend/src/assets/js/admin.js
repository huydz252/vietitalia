import '../css/style.css'; 

// const API_URL = 'http://localhost:5000/api'; 
const API_URL = 'https://vietitalia.onrender.com/api'; 

// --- FORM SỰ KIỆN ---
const eventForm = document.getElementById('addEventForm'); 

eventForm.addEventListener('submit', async (e) => { 
    e.preventDefault(); 

    console.log('check form submission');

    const formData = new FormData();
    formData.append('title', document.getElementById('event_title').value); 
    formData.append('location', document.getElementById('event_location').value); 
    const dateVal = document.getElementById('event_date').value; 
    if (dateVal) formData.append('event_date', dateVal);
    
    formData.append('description', document.getElementById('event_description').value); 
    formData.append('status', 'upcoming'); 

    const langVal = eventForm.querySelector('[name="lang"]').value;
    formData.append('lang', langVal);

    const fileInput = document.getElementById('event_media_file'); 
    if (fileInput && fileInput.files.length > 0) {
        for (let i = 0; i < fileInput.files.length; i++) {
            // Đổi thành 'media' để trùng khớp với cấu hình upload.array('media') ở Route
            formData.append('media', fileInput.files[i]); 
        }
    }

    try {
        const response = await fetch(`${API_URL}/events`, { 
            method: 'POST', 
            body: formData
        });

        const result = await response.json(); 

        if (result.success) { 
            alert('🎉 Đã thêm SỰ KIỆN và TẢI MEDIA thành công!');
        } else {
            alert('❌ Lỗi lưu sự kiện: ' + result.message); 
        }
    } catch (error) { 
        console.error('Lỗi API:', error); 
        alert('❌ Không thể kết nối tới Server!'); 
    }
});

// --- FORM DU LỊCH ---
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

    const formData = new FormData();
    formData.append('title', titleVal);
    formData.append('slug', slugVal);
    formData.append('category', document.getElementById('travel_category').value);
    formData.append('content', document.getElementById('travel_content').value);

    const langVal = travelForm.querySelector('[name="lang"]').value;
    formData.append('lang', langVal);

    // Bỏ khai báo thừa ở phía trên, chỉ giữ lại một chỗ gọn gàng ở đây
    const travelFileInput = document.getElementById('travel_media_file'); 
    if (travelFileInput && travelFileInput.files.length > 0) {
        for (let i = 0; i < travelFileInput.files.length; i++) {
            formData.append('media', travelFileInput.files[i]); 
        }
    }

    try {
        const response = await fetch(`${API_URL}/travels`, { 
            method: 'POST', 
            body: formData 
        });

        const result = await response.json(); 

        if (result.success) { 
            alert('✈️ Đã thêm BÀI DU LỊCH và TẢI ẢNH thành công!'); 
        } else {
            alert('❌ Lỗi lưu bài viết: ' + result.message); 
        }
    } catch (error) { 
        console.error('Lỗi API:', error); 
        alert('❌ Không thể kết nối tới Server!'); 
    }
});