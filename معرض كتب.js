// const btn=document.getElementById("btn");
// function btns(x){
//     document.body.style.background='#fff';
// }
async function loadBooks(){
    const container = document.getElementById("books");
    let totalBooks = 50; // لتجربة سريعة
    let loaded = 0;
    let page = 1;

    while(loaded < totalBooks){
        const res = await fetch(`https://openlibrary.org/search.json?q=arabic&language=ara&has_fulltext=true&page=${page}`);
        const data = await res.json();
        if(!data.docs || data.docs.length === 0) break;

        for(const book of data.docs){
            if(loaded >= totalBooks) break;
            if(!book.cover_i) continue;

            const div = document.createElement("div");
            div.className = "book";
            div.innerHTML = `
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}">
                <p>${book.title}</p>
            `;

            div.onclick = async () => {
                if(book.ia){
                    // تحقق من وجود PDF على Internet Archive
                    const pdfUrl = `https://archive.org/download/${book.ia}/${book.ia}.pdf`;
                    try {
                        const head = await fetch(pdfUrl, { method: 'HEAD' });
                        if(head.ok){
                            window.open(pdfUrl, "_blank"); // فتح PDF مباشرة
                        } else {
                            alert("PDF غير متاح لهذا الكتاب، سيتم فتح صفحة OpenLibrary");
                            window.open(`https://openlibrary.org${book.key}`, "_blank");
                        }
                    } catch(e){
                        alert("حدث خطأ أثناء تحميل PDF، سيتم فتح صفحة OpenLibrary");
                        window.open(`https://openlibrary.org${book.key}`, "_blank");
                    }
                } else {
                    // إذا لا يوجد IA، افتح صفحة الكتاب
                    window.open(`https://openlibrary.org${book.key}`, "_blank");
                }
            };

            container.appendChild(div);
            loaded++;
        }
        page++;
    }
}

loadBooks();

async function loadItalianBooks() {
    const container = document.getElementById("books");
    container.innerHTML = ""; // مسح الكتب القديمة
    let totalBooks = 100;
    let loaded = 0;
    let page = 1;

    while (loaded < totalBooks) {
        const res = await fetch(`https://openlibrary.org/search.json?q=italian&language=ita&has_fulltext=true&page=${page}`);
        const data = await res.json();
        if (!data.docs || data.docs.length === 0) break;

        for (const book of data.docs) {
            if (loaded >= totalBooks) break;
            if (!book.cover_i) continue;

            const div = document.createElement("div");
            div.className = "book";
            div.innerHTML = `
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}">
                <p>${book.title}</p>
            `;

            div.onclick = async () => {
                if (book.ia) {
                    const pdfUrl = `https://archive.org/download/${book.ia}/${book.ia}.pdf`;
                    try {
                        const head = await fetch(pdfUrl, { method: 'HEAD' });
                        if (head.ok) {
                            window.open(pdfUrl, "_blank");
                        } else {
                            alert("PDF غير متاح لهذا الكتاب، سيتم فتح صفحة OpenLibrary");
                            window.open(`https://openlibrary.org${book.key}`, "_blank");
                        }
                    } catch (e) {
                        alert("حدث خطأ أثناء تحميل PDF، سيتم فتح صفحة OpenLibrary");
                        window.open(`https://openlibrary.org${book.key}`, "_blank");
                    }
                } else {
                    window.open(`https://openlibrary.org${book.key}`, "_blank");
                }
            };

            container.appendChild(div);
            loaded++;
        }
        page++;
    }
}

loadItalianBooks();
async function loadEnglishBooks() {
    const container = document.getElementById("books");
    container.innerHTML = ""; // مسح الكتب القديمة
    let totalBooks = 100;
    let loaded = 0;
    let page = 1;

    while (loaded < totalBooks) {
        const res = await fetch(`https://openlibrary.org/search.json?q=english&language=eng&has_fulltext=true&page=${page}`);
        const data = await res.json();
        if (!data.docs || data.docs.length === 0) break;

        for (const book of data.docs) {
            if (loaded >= totalBooks) break;
            if (!book.cover_i) continue;

            const div = document.createElement("div");
            div.className = "book";
            div.innerHTML = `
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}">
                <p>${book.title}</p>
            `;

            div.onclick = async () => {
                if (book.ia) {
                    const pdfUrl = `https://archive.org/download/${book.ia}/${book.ia}.pdf`;
                    try {
                        const head = await fetch(pdfUrl, { method: 'HEAD' });
                        if (head.ok) {
                            window.open(pdfUrl, "_blank");
                        } else {
                            alert("PDF غير متاح لهذا الكتاب، سيتم فتح صفحة OpenLibrary");
                            window.open(`https://openlibrary.org${book.key}`, "_blank");
                        }
                    } catch (e) {
                        alert("حدث خطأ أثناء تحميل PDF، سيتم فتح صفحة OpenLibrary");
                        window.open(`https://openlibrary.org${book.key}`, "_blank");
                    }
                } else {
                    window.open(`https://openlibrary.org${book.key}`, "_blank");
                }
            };

            container.appendChild(div);
            loaded++;
        }
        page++;
    }
}

loadEnglishBooks();
async function loadEnglishBooks() {
    const container = document.getElementById("books");
    container.innerHTML = ""; // مسح الكتب القديمة
    let totalBooks = 200;  // عدد الكتب المطلوب
    let loaded = 0;
    let page = 1;

    while (loaded < totalBooks) {
        const res = await fetch(`https://openlibrary.org/search.json?q=english&language=eng&has_fulltext=true&page=${page}`);
        const data = await res.json();
        if (!data.docs || data.docs.length === 0) break;

        for (const book of data.docs) {
            if (loaded >= totalBooks) break;
            if (!book.cover_i) continue;

            const div = document.createElement("div");
            div.className = "book";
            div.innerHTML = `
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}">
                <p>${book.title}</p>
            `;

            div.onclick = async () => {
                if (book.ia) {
                    const pdfUrl = `https://archive.org/download/${book.ia}/${book.ia}.pdf`;
                    try {
                        const head = await fetch(pdfUrl, { method: 'HEAD' });
                        if (head.ok) {
                            window.open(pdfUrl, "_blank");
                        } else {
                            alert("PDF غير متاح لهذا الكتاب، سيتم فتح صفحة OpenLibrary");
                            window.open(`https://openlibrary.org${book.key}`, "_blank");
                        }
                    } catch (e) {
                        alert("حدث خطأ أثناء تحميل PDF، سيتم فتح صفحة OpenLibrary");
                        window.open(`https://openlibrary.org${book.key}`, "_blank");
                    }
                } else {
                    window.open(`https://openlibrary.org${book.key}`, "_blank");
                }
            };

            container.appendChild(div);
            loaded++;
        }

        page++; // الانتقال للصفحة التالية
    }
}

loadEnglishBooks();
