

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Mengambil data


    } else if (req.method === 'POST') {
        // Menambahkan data ke server


    } else if (req.method === 'PUT') {
        // megganti data yang di tuju (Update)


    } else if (req.method === 'PATCH') {
        // modifikasi / memperbarui data yang di tuju


    } else if (req.method === 'DELETE') {
        // menghapus data
    }
})