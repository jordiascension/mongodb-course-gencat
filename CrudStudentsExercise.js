//Insert one student with insertOne instruction
print("Insert one student with insertOne instruction")
printjson(db.students.insertOne({ name: "Jane Doe", major: "Computer Science", gpa: 3.8 }))

//Insert multiple students with insertMany instruction
print("Insert multiple students with insertMany instruction")
printjson(db.students.insertMany([
  { name: "Alice Smith", major: "Mathematics", gpa: 3.5 },
  { name: "Bob Johnson", major: "Physics", gpa: 3.2 },
  { name: "Charlie Brown", major: "English", gpa: 3.9 }
]))

//Find all students
print("Find all students")
printjson(db.students.find({}))

print("Find all students and limit to one student ")
printjson(db.students.find({}).limit(1))

//Find first student according insertion order
print("Find first student according insertion order")
printjson(db.students.findOne({}))

//Find all students ordered by name
print("Find all students ordered by name")
printjson(db.students.find().sort({name: 1}))

//
//Update a student with updateOne instruction
//
print("Updating a student with updateOne instruction")
printjson(db.students.updateOne({ name: "Jane Doe" },{ $set: { gpa: 3.9 } } ) )
//
//Update multiple students with updateMany instruction
//
print("Updating multiple students with updateMany instruction")
printjson(db.students.updateMany(
    { major: "Biology" },
    { $set: { status: "active" } } ) )
//
//Delete multiple students with deleteMany instruction
//
print("Deleting multiples students with deleteMany instruction")
printjson(db.students.deleteMany({ gpa: { $eq: 3.2 } } ) )

//drop students collection
print("drop students collection")
printjson(db.students.drop())
