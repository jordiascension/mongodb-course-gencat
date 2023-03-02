'''
Created on Mar 2, 2023

@author: jordi
'''
import pymongo

#This is a MongoDb Connection
client = pymongo.MongoClient("localhost", 27017)

#Create a test database
db = client.test
print(db.name)

#Drop and Create my_collection collection
db.my_collection.drop()
print(db.my_collection)

#Insert one element with different fields
print(db.my_collection.insert_one({"x": 10}).inserted_id)
print(db.my_collection.insert_one({"x": 11, "name" : "Pepe"}).inserted_id)
print(db.my_collection.insert_one({"x": 12, "name" : "Alberto", "surname" : "Soto"}).inserted_id)

#Find_one element
print(db.my_collection.find_one())

#Loop through a collection
for item in db.my_collection.find():
    print(item)

#Loop through a collection in a descending order
for item in db.my_collection.find().sort("x", pymongo.DESCENDING):
    print(item)

#Update one element in a collection    
myquery = { "name": "Alberto" }
newvalues = { "$set": { "name": "Jordi" } }

db.my_collection.update_one(myquery, newvalues)

#print "customers" after the update:
for item in db.my_collection.find():
    print(item)
