async function getUserInfo() {
    const userId = document.getElementById('userIdInput').value;
    
    if (!userId) {
        alert('Please enter a User ID');
        return;
    }
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        const userInfoResult = document.getElementById('userInfoResult');
        let userInfoHTML = '';   
        if (response.ok) {
            userInfoHTML = `
                    <tr>
                        <th>Name</th>
                        <td>${user.name}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>${user.username}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>${user.email}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>${user.address.city}</td>
                    </tr>
                    <tr>
                        <th>Street</th>
                        <td>${user.address.street}</td>
                    </tr>
                    <tr>
                        <th>zipcode</th>
                        <td>${user.address.zipcode}</td>
                    </tr>
                    <tr>
                        <th>Result</th>
                        <td class="success">User found</td>
                    </tr>

            `;
           userInfoResult.innerHTML = userInfoHTML;
        } else {
               userInfoHTML = `
                    <tr>
                        <th>Name</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Street</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>zipcode</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Result</th>
                        <td class="error">User not found</td>
                    </tr>

            `;
           userInfoResult.innerHTML = userInfoHTML;
        }
    } catch (error) {
        showErrorUser('An error occurred');
    }
}
function resetUserInfo(){
     const userInfoResult = document.getElementById('userInfoResult');
      userInfoResult.innerHTML = '';
     document.getElementById('userIdInput').value='';
}

async function getImageInfo() {
    const imageId = document.getElementById('imageIdInput').value;
    
    if (!imageId) {
        alert('Please enter an Image ID');
        return;
    }
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`);
        const image = await response.json();
        const imageInfoResult = document.getElementById('imageInfoResult');
        let imgInfoHTML = '';  
        
        if (response.ok) {
            imgInfoHTML=`
            <tr>
                <th>Album ID</th>
                <td>${image.albumId}</td>
            </tr>
            <tr>
                <th>Image</th>
                <td><img src="${image.thumbnailUrl}" alt="${image.title}" title="${image.title}"></td>
            </tr>
            <tr>
                <th>Result</th>
                <td class="success">Image found</td>
            </tr>
            `;
        imageInfoResult.innerHTML = imgInfoHTML;
        } else {
            imgInfoHTML=`
            <tr>
                <th>Album ID</th>
                <td></td>
            </tr>
            <tr>
                <th>Image</th>
                <td><img src="${image.thumbnailUrl}" alt="${image.title}" title="${image.title}"></td>
            </tr>
            <tr>
                <th>Result</th>
                <td class="error">Image not found</td>
            </tr>
            `;
        imageInfoResult.innerHTML = imgInfoHTML;
        }
    } catch (error) {
        showError('An error occurred');
    }
}
function resetImgInfo(){
     const imageInfoResult = document.getElementById('imageInfoResult');
      imageInfoResult.innerHTML = '';
     document.getElementById('imageIdInput').value='';
}

function showErrorUser(message) {
    const userInfoResult = document.getElementById('userInfoResult');
    userInfoResult.innerHTML = message;
    userInfoResult.classList.add('error');
}
function showErrorImg(message) {
    const imageInfoResult = document.getElementById('imageInfoResult');
    imageInfoResult.innerHTML = message;
    imageInfoResult.classList.add('error');
}