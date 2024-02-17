let name1 = document.querySelector('#name')
let surname = document.querySelector('#surname')
let age = document.querySelector('#age')
let email = document.querySelector('#email')
let pasword = document.querySelector('#pasword')
let phonNumber = document.querySelector('#tel')
let select = document.querySelector('#select')
let des = document.querySelector('#text')
let btn = document.querySelector('#button')
let ochirish = document.querySelector('#ochirish')
const wrapper = document.querySelector('#wrapper')


function validate(name, surname, age, email, pasword, phonNumber, des, select) {
    //Ism kiritilishi shart bolganda
    if (!name.value) {
        alert('Name kiritilishi shart');
        name.focus()
        name.style.borderColor = 'red';
        name.style.outlineColor = 'red';
        return false;
    } else {
        name.style.outlineColor = 'black';
        name.style.borderColor = 'black'
    }
    //name kamida 3 ta harfdan iborat bolioshi shart
    if (name.value.trim().length < 3) {
        alert('Ism kamida 3 ta harf bolishi kerak');
        name.focus()
        name.style.borderColor = 'red';
        name.style.outlineColor = 'red';
        return false;
    } else {
        name.style.outlineColor = 'black';
        name.style.borderColor = 'black';
    }
    if (Number(name.value[0])) {
        alert('Ism raqamdan boshlanmaydi')
        name.focus()
        name.style.borderColor = 'red';
        name.style.outlineColor = 'red'
        return false
    } else {
        name.style.outlineColor = 'black';
        name.style.borderColor = 'black';
    }
    //  SURNAME
    //Familiya kiritilishi shart bolganda
    if (!surname.value) {
        alert('familiya kiritilishi shart');
        surname.focus()
        surname.style.borderColor = 'red';
        surname.style.outlineColor = 'red';
        return false;
    } else {
        surname.style.outlineColor = 'black'
        surname.style.borderColor = 'black';
    }
    //familiya kamida 3 ta harfdan iborat bolioshi shart
    if (surname.value.trim().length < 3) {
        alert('familiya kamida 3 ta harf bolishi kerak');
        surname.focus()
        surname.style.borderColor = 'red';
        surname.style.outlineColor = 'red';
        return false;
    } else {
        surname.style.outlineColor = 'black';
        surname.style.borderColor = 'black';
    }
    // familiya boshi sondan bohlanmaydi
    if (Number(surname.value[0])) {
        alert('familiya raqamdan boshlanmaydi')
        surname.focus()
        surname.style.borderColor = 'red';
        surname.style.outlineColor = 'red';
        return false;
    } else {
        surname.style.outlineColor = 'black';
        surname.style.borderColor = 'black';
    }
    //Age
    if (!age.value) {
        alert('yosh kiritilishi shart')
        age.focus();
        age.style.outlineColor = 'red';
        age.style.borderColor = 'red';
        return false;
    } else {
        age.style.outlineColor = 'black';
        age.style.borderColor = 'black';
    }
    if (age.value > 150) {
        alert('Inson hali bunday yoshga yetmagan')
        age.focus();
        age.style.outlineColor = 'red';
        age.style.borderColor = 'red';
        return false;
    } else {
        age.style.outlineColor = 'black';
        age.style.borderColor = 'black';
    }
    //email
    if (!email.value) {
        alert('emil kiritilishi shart');
        email.focus();
        email.style.borderColor = 'red';
        email.style.outlineColor = 'red';
        return false
    } else {
        email.style.borderColor = 'black';
        email.style.outlineColor = 'black';
    }
    if (email.value.trim().length < 10) {
        alert('email kamida 10ta belgida iborat bolishi shart');
        email.focus();
        email.style.borderColor = 'red';
        email.style.outlineColor = 'red';
        return false
    } else {
        email.style.borderColor = 'black';
        email.style.outlineColor = 'black';
    }
    //pasword
    if (!pasword.value) {
        alert('pasword kiritilishi shart');
        pasword.focus();
        pasword.style.borderColor = 'red';
        pasword.style.outlineColor = 'red';
        return false
    } else {
        pasword.style.borderColor = 'black';
        pasword.style.outlineColor = 'black';
    }
    if (pasword.value.length < 7) {
        alert('pasword kamida 8 ta belgidan iborat bolishi shart');
        pasword.focus();
        pasword.style.borderColor = 'red';
        pasword.style.outlineColor = 'red';
        return false
    } else {
        pasword.style.borderColor = 'black';
        pasword.style.outlineColor = 'black';
    }
    //Phone Number
    if (!phonNumber.value) {
        alert('Nomer  kiritilishi shart');
        phonNumber.focus();
        phonNumber.style.borderColor = 'red';
        phonNumber.style.outlineColor = 'red';
        return false
    } else {
        phonNumber.style.borderColor = 'black';
        phonNumber.style.outlineColor = 'black';
    }
    if (phonNumber.value.trim().length < 12) {
        alert('Nomer  13 ta belgidan kam bolishi mumkun emas shart');
        phonNumber.focus();
        phonNumber.style.borderColor = 'red';
        phonNumber.style.outlineColor = 'red';
        return false
    } else {
        phonNumber.style.borderColor = 'black';
        phonNumber.style.outlineColor = 'black';
    }
    if (phonNumber.value.substring(0, 4) != +998) {
        alert('Nomer boshi +998 bilan boshlanishi shart');
        phonNumber.focus();
        phonNumber.style.borderColor = 'red';
        phonNumber.style.outlineColor = 'red';
        return false
    } else {
        phonNumber.style.borderColor = 'black';
        phonNumber.style.outlineColor = 'black';
    }
    //  text
    if (!des.value) {
        alert('izoh bolishi shart');
        des.focus();
        des.style.borderColor = 'red';
        des.style.outlineColor = 'red';
        return false
    } else {
        des.style.borderColor = 'black';
        des.style.outlineColor = 'black';
    }
    if (des.value.trim().length < 5) {
        alert('izoh kamida 10 ta belgidan iborat bolishi shart');
        des.focus();
        des.style.borderColor = 'red';
        des.style.outlineColor = 'red';
        return false
    } else {
        des.style.borderColor = 'black';
        des.style.outlineColor = 'black';
    }
    return true;
}
function getData() {
    let userr = [];
    if (localStorage.getItem('userr')) {
        userr = JSON.parse(localStorage.getItem('userr'));
    }
    return userr;
}
btn && btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (validate(name1, surname, age, email, pasword, phonNumber, des, select,)) {
        const user = {
            name: name1.value,
            surname: surname.value,
            age: age.value,
            email: email.value,
            pasword: pasword.value,
            Phone: phonNumber.value,
            select: select.value,
            des: des.value,
        }

        let u = getData();
        u.push(user)
        localStorage.setItem('userr', JSON.stringify(u))
        form.reset();
        let card = createCard(user)
        wrapper.innerHTML += card
    } else {
        console.log('otmadi');
    }
})
function createCard(user) {
    return `
    <div class="card">
    <div>
    <h3>Ismi ${user.name}</h3>
    <h3>Familiyasi ${user.surname}</h3>
    <h3>Yosh ${user.age}</h3>
    <h3>Emaili ${user.email}</h3>
    <h3>Parol ${user.pasword}</h3>
    <h3>Nomer ${user.Phone}</h3>
    <h3>Millati ${user.select}</h3>
    <h3>Izoh  ${user.des}</h3>
    </div>
    <div></div>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', function () {
    let users = getData()
    users.forEach(user => {
        let card = createCard(user);
        wrapper.innerHTML += card
    });
})

ochirish && ochirish.addEventListener('click', function (e) {
    e.preventDefault();
    confirm('Malumotlarni hammasini ochirmoqchimisiz')
    if (confirm) {
        localStorage.clear();
        wrapper.style.display = 'none'
    }else
    {
        
    }
})

