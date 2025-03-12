// 1. Funksiyaga full_name ya'ni "John Doe" kirsa "JD" qilib qaytaring

function fullName (namefn:string):string {
    return namefn.split(" ").map((ism) => ism[0]).join('')
}

console.log(fullName('John Doe'));


// 2. funksiyaga "Yes" kirsa true, "No" kirsa false agar bunday qiymatlar kirmasa null qaytarsin

const booln = (qiymat:string):boolean | null => {
    let natija = qiymat.toLowerCase()

    if(natija === 'yes') {
        return true
    } else if (natija === "no") {
        return false
    } else {
        return null
    }
}

console.log(booln('Yes'));


// 3. uchta parametr qabul qiladi: name, age va isStudent. Agar foydalanuvchi student bo'lsa, "John is 25 years old and is a student" tarzida chiqsin. Aks holda "John is 25 years old and is not a student" deb qaytarsin.

function tekshirish (name:string, age:number, isStudent:boolean):string | number | boolean {
    if (isStudent) {
        return `${name} is ${age} years old and is a student`
    } else {
        return `${name} is ${age} years old and is not a student`
    }
}

console.log(tekshirish("Javohir", 18, true));


// 4. funksiya input nomli parametr qabul qiladi, u string yoki number bo'lishi mumkin.
// agar number bo'lsa, uni kvadratga oshirsin
// agar string bo'lsa, "Hello {input} shaklida qaytarsin"

const nimadir = function (input:string | number):string | number {
    return typeof input === 'number' ? input ** 2 : `Hello ${input}`
}

console.log(nimadir(4));


// 5. User turidagi tuple yarating, u quyidagi ma'lumotlarni saqlashi kerak.
// id: number
// username: string
// isAdmin: boolean

let User: [number, string, boolean] = [1, 'Javohir', true]
console.log(User);


// 6. Car nomli interface yarating, u quyidagi xususiyatlarga ega bo'lsin
// brand: string
// username: string
// isAdmin: boolean

interface Car {
    brand: string;
    username: string;
    isAdmin: boolean
}

let car:Car = {
    brand: 'Audi',
    username: "Javohir",
    isAdmin: true,
}
console.log(car);

// 7. getLength nomli funksiya yozing, u: Agar string bersak, uning uzunligi. Agar array bersak array uzunligini qaytarsin
function getLength (uzunlik: any): any {
    return uzunlik.length
}

console.log(getLength('salom'));
console.log(getLength([1,2,3,4]));



// 8. funksiyaga n (n > 0) soni kirsa ana shunga bo'lgan sonlarni array qilib qaytaring!

// 8. funksiyaga n (n > 0) soni kirsa ana shunga bo'lgan sonlarni array qilib qaytaring!

function sonlar(n:number):any {
    let sonArray: any = [];
    for (let i = 1; i <= n; i++) {
        sonArray.push(i);
    }
    return sonArray;
}
console.log(sonlar(5))




// 9. funksiyaga k va n (n > k) soni kirsa k dan n gacha bo'lgan juft sonlarni array qilib qaytaring 

function teksh (k:number, n:number):any {
    let array:any = []
    for(let i = k; i <= n; i++) {
        if(i % 2 === 0) {
            array.push(i)
        }
    }
    return array
}

console.log(teksh(3, 10));

// 10. never funksiyaga misol yozing

function xatolik(xato: string): never {
    throw new Error(xato)
}