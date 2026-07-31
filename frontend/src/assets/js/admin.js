import '../css/style.css'; 

const API_URL = 'https://vietitalia.onrender.com/api'; 

const eventForm = document.getElementById('addEventForm'); 

eventForm.addEventListener('submit', async (e) => { 
    e.preventDefault(); 

    const formData = new FormData();
    formData.append('title', document.getElementById('event_title').value); 
    formData.append('location', document.getElementById('event_location').value); 
    const dateVal = document.getElementById('event_date').value; 
    if (dateVal) formData.append('event_date', dateVal);
    
    formData.append('description', document.getElementById('event_description').value); 
    formData.append('status', 'upcoming'); 

    const langVal = eventForm.querySelector('[name="lang"]').value;
    formData.append('lang', langVal);

    const fileInput = document.getElementById('event_media_file'); // hoặc travel_media_file
    if (fileInput && fileInput.files.length > 0) {
        for (let i = 0; i < fileInput.files.length; i++) {
            formData.append('media', fileInput.files[i]); // Tên 'media' sẽ khớp với Backend
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

    const fileInput = document.getElementById('travel_media_file'); // hoặc travel_media_file
    if (fileInput && fileInput.files.length > 0) {
        for (let i = 0; i < fileInput.files.length; i++) {
            formData.append('media', fileInput.files[i]); // Tên 'media' sẽ khớp với Backend
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