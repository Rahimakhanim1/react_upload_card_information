const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
var cors = require('cors')
const app = express();
const port = 5000;
app.use(cors());

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});


const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image');


function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, './data.json'); // Replace 'data.txt' with your file

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }
    res.send(data);
    console.log(data)

  });
});


app.post('/upload', (req, res) => {

  upload(req, res, (err) => {
    console.log('isledim',req.file)
    if (err) {
      res.status(400).json({ error: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ error: 'No file selected' });
      } else {
        console.log('yazildim')
        const imageData = {
          name: req.body.name,
          job: req.body.job,
          description: req.body.description,
          filename: req.file.filename,
          path: req.file.path,
          size: req.file.size
        };    
        fs.writeFileSync('data.json', JSON.stringify(imageData, null, 2));
        res.json({ message: 'File uploaded successfully', data: imageData });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
