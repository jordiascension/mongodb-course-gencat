### Mongosh Path
C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin

### Mongosh Executes an external javascript file
mongosh "127.0.0.1/school" "C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin\scripts\GetStudents.js"
mongosh 127.0.0.1/school C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin\scripts\CreateSchoolSchema.js

mongosh "mongodb+srv://cluster0.dsb8fht.mongodb.net/school" --apiVersion 1 --username jordi
mongosh "mongodb+srv://cluster0.dsb8fht.mongodb.net/school" --apiVersion 1 --username jordi C:\Users\jordi\Downloads\mongosh-1.7.1-win32-x64\bin\scripts\GetStudents.js

### Execute Postman files via Newman
newman run NttData-Student-Gencat.postman_collection.json -e NttData-Student-PRO.postman_environment.json