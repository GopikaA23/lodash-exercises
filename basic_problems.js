// 1.Given an array of numbers, use Lodash to find the sum of all the even numbers.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_.chain(array).filter((n) => n % 2 == 0).sum().value()

//output: 30

// 2.Given an object representing a person with properties like name, age, and address, use Lodash to create a new object that only includes the person's name and age. 

data = [{ name: 'mark', age: 20, address: 'delhi' },
{ name: 'alis', age: 23, address: 'mumbai' },
{ name: 'deva', age: 22, address: 'karur' }]
_.chain(data).map((person) => ({ 'name': person.name, 'age': person.age })).value()

/* output: { name: 'mark', age: 20, address: 'delhi' },
{ name: 'alis', age: 23, address: 'mumbai' },
{ name: 'deva', age: 22, address: 'karur' } */

// 3. Given an array of strings, use Lodash to filter out all strings that contain the letter 'a'.

string_arr = ['apple', 'grapes', 'litchi', 'mango']
_.chain(string_arr).filter((string) => string.includes('a')).value()

// output: ['apple', 'grapes', 'mango']

// 4. Given an array of names, use Lodash to create a new array of the same names, but with each name in uppercase.

name_arr = ['babu', 'swetha', 'ramya', 'mano']
_.chain(name_arr).map((name) => _.toUpper(name)).value()

// output: ['BABU, 'SWETHA', 'RAMYA', 'MANO']

/* 5. Given an array of objects representing books with properties like title, author, and publication
 year, use Lodash chaining to filter out books published before the year 2000 and then create an 
 array of their titles. */

 arr_obj = [{ title: 'Client Server Computing', author: 'Lalit Kumar', publication_year: 2000 },
{ title: 'Mobile Computing', author: 'Surat Viney', publication_year: 1897 },
{ title: 'Computer Networks', author: 'Dej Aswini', publication_year: 2009 },
{ title: 'Software Testing', author: 'Kapil Dev', publication_year: 1976 }]

_.chain(arr_obj).filter((book) => book.publication_year < 2000).map((book) => book.title).value()

// output: ['Mobile Computing', 'Software Testing']

// 6. Given an array of numbers, use Lodash to find the first number that is greater than 10.

num_arr = [ 2, 4, 6, 22, 68, 98, 1]
_.find(num_arr, (num) => num > 10)

//output: 22

/* 7. Given an array of objects representing students with properties like name and score, 
use Lodash to group the students into two arrays: one for those with scores greater than 
or equal to 90, and one for those with scores less than 90. */

student_arr = [{ name: 'anbu', score: 67 },
{ name: 'devid', score: 99 },
{ name: 'latha', score: 56 },
{ name: 'jothi', score: 89 },
{ name: 'dhara', score: 92 },
{ name: 'shifa', score: 78 },
{ name: 'krithi', score: 90 },
{ name: 'archu', score: 67 },
{ name: 'bala', score: 95 }]
_.partition(student_arr, (student) => student.score >= 90)

/* output: [{ name: 'devid', score: 99 }, { name: 'dhara', score: 92 },{ name: 'krithi', score: 90 },  name: 'bala', score: 95 }],
[{ name: 'anbu', score: 67 }, { name: 'latha', score: 56 },{ name: 'jothi', score: 89 }, { name: 'shifa', score: 78 }, { name: 'archu', score: 67 }] */

/* 8. Given an array of objects where each object has a nested array (e.g., representing a list 
  of orders with order items), use Lodash to find the total quantity of items across all orders. */

orders = [
    { id: 1, items: [{ quantity: 2 }, { quantity: 3 }] },
    { id: 2, items: [{ quantity: 1 }, { quantity: 4 }] }]

_.sumBy(_.flatMap(orders,'items'), 'quantity')

// output: 10    

/* 9.Given an array of numbers, chain Lodash functions to filter out odd numbers, 
square the remaining ones, and then find the sum of the squared values. */

numbers = [1, 2, 3, 4, 5]
_.chain(numbers).remove((num) => num % 2 == 0).map((num) => num * num).sum().value()

// output: 20

/* 10.Given an array of user objects with properties like id, name, and email, chain Lodash 
functions to create a new array containing objects with only the id and name properties. */

users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }];

_.chain(users).map((student) => ({ 'id': student.id, 'name': student.name })).value()

// output: [{ id: 1, name: 'Alice', email: }, { id: 2, name: 'Bob'}]

/* 11. Given an array of words, use Lodash to filter out words that start with the letter 'a' 
and then find the first word that contains the letter 'b'. */

words = ['apple', 'banana', 'cherry', 'date']
start_with_a = _.remove(words, (word) => word[0] === 'a')
_.find(words, (word) => word[0] === 'b')

// output: 'banana'

/* 12. Given an array of objects representing students with properties like name and grade, 
use Lodash to group students by their grades and then create an array of objects with the 
average grade for each group. */

students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' }];

_.chain(students).groupBy("grade").mapValues((data , grade) => grade).value()

// output: {A: 'A', B: 'B'}
 
/* 13. Given an array of objects with properties like price and category, chain Lodash functions 
to filter out objects with a price greater than 50 and then create an array with the names of the 
remaining items. */

items = [
  { name: 'Item1', price: 30, category: 'Electronics' },
  { name: 'Item2', price: 60, category: 'Clothing' },
  { name: 'Item3', price: 20, category: 'Electronics' }];

_.chain(items).remove((order) => order.price > 50).map((order) => order.name).value()

// output: ['Item2']

/* 14. Given an array of books with properties like title, author, and genre, use Lodash to create 
an object where books are grouped by genre, and each group contains only the title and author 
properties. */

books = [
  { title: 'Book1', author: 'Author1', genre: 'Fiction' },
  { title: 'Book2', author: 'Author2', genre: 'Non-Fiction' },
  { title: 'Book3', author: 'Author3', genre: 'Fiction' }];

_.chain(books).groupBy("genre").mapValues((data) => _.map(data,(d) => _.pick(d,['title','author']))).value()
 

/* 15.  Given an array of numbers, filter out all numbers less than 10, and then check 
if the resulting array includes the number 15.*/

numbers = [5, 8, 12, 15]
_.chain(numbers).remove((num) => num < 10).includes(15).value()

// output: true

/* 16.Given an array of objects representing cars with properties like make, model, and year, 
use Lodash to map the array to an array of strings containing the make and model, and then find 
the index of a car with a specific make and model. */

cars = [
  { make: 'Toyota', model: 'Camry', year: 2020 },
  { make: 'Honda', model: 'Civic', year: 2019 },
  { make: 'Ford', model: 'Fusion', year: 2021 }
]
carsData = _.chain(cars).map((car) => `${car.make} ${car.model}`).value()
_.findIndex(carsData, (c) => c === "Honda Civic")

// output: 1

/* 17. Given an array of strings, chain Lodash functions to map each string to its length and then 
find the index of the first string with a length greater than 5. */

strings = ['apple', 'banana', 'cherry', 'date']
_.chain(strings).findIndex((str) => str.length > 5).value()

// output: 1


/* 18. Given an array of objects representing employees with properties like name, department, and
 salary, use Lodash to group employees by department and then filter out departments where the 
 average salary is less than 50000. */

employees = [
  { name: 'Alice', department: 'HR', salary: 55000 },
  { name: 'Bob', department: 'IT', salary: 60000 },
  { name: 'Charlie', department: 'HR', salary: 48000 }
]
_.chain(employees).groupBy("department").mapValues((data) => _.pickBy(data,(d) => d.salary >= 50000)).value()

// output: { HR: { name: 'Alice', department: 'HR', salary: 55000}, IT: { name: 'Bob', department: 'IT', salary: 60000 }}

//19.

students = [
  { name: 'Alice', grade: 'A', mark: 34 },
  { name: 'Bob', grade: 'B', mark: 67 },
  { name: 'Charlie', grade: 'A', mark: 45 }]
_.chain(students).groupBy('grade').mapValues((data) => _.map(data, (d) => d.mark)).value()

_.map(carsData, (data) => data.email)
_.map(carsData, 'email')

_.filter(carsData,(data) => data.model === 'Ford')
_.filter(carsData,{model: 'Ford'})




