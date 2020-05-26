// 1. Users Like This
//    a. Create an array of objects where the value from the name key is the key in the new object index and the likes value is the value in the new object index.
//    b. Calculate age based on the number of letters in the name \* 10
//    c. Use destructuring in your callback arguments so you do not repeat code.
//    const users = [
//    { name: 'pan', likes: 'lasagne' },
//    { name: 'lena', likes: 'wine' },
//    { name: 'jill', likes: 'tacos' },
//    { name: 'conner', likes: 'turkey' }
//    ];
//    OUTPUT:
//    [
//    { pan: 'lasagne', age: 30 },
//    { lena: 'wine', age: 40 },
//    { jill: 'tacos', age: 40 },
//    { conner: 'turkey', age: 60 }
//    ]

const users = [
	{ name: 'pan', likes: 'lasagne' },
	{ name: 'lena', likes: 'wine' },
	{ name: 'jill', likes: 'tacos' },
	{ name: 'conner', likes: 'turkey' }
];

const question1 = function(users) {
	let output = [];
	for(const user of users) {
		let obj = {};
		obj[user.name] = user.likes;
		obj.age = user.name.length * 10;
		output.push(obj);
	}

	return output;
}

console.log(question1(users));

// 2. Chain map, filter, reduce. Add 500 to each bottle of red wine, then add all the red wine bottles together. Use all three methods we learned today.

let data = [
    {
    wineColor: 'red',
    year: '1922',
    region: 'Bordeaux',
    numBottles: 123
    },
    {
    wineColor: 'red',
    year: '1972',
    region: 'Beaujolais',
    numBottles: 29
    },
    {
    wineColor: 'white',
    year: '2020',
    region: 'Bourgogne',
    numBottles: 224
    },
    {
    wineColor: 'white',
    year: '1987',
    region: 'Merlot',
    numBottles: 122
    },
    {
    wineColor: 'white',
    year: '1963',
    region: 'Rioja',
    numBottles: 22
    },
    {
    wineColor: 'red',
    year: '1976',
    region: 'Napa',
    numBottles: 54
    }
];

// 2. Chain map, filter, reduce. Add 500 to each bottle of red wine, then add all the red wine bottles together. Use all three methods we learned today.

let out = data.filter(function(value) {
	if(value.wineColor == "red") {
		return true;
	} else {
		return false;
	}
}).map(function(value) {
	value.numBottles += 500;
	return value;
}).reduce(function(total, currentValue) {
	return total + currentValue.numBottles;
}, 0);

console.log(out);

// 3. Just Averages
// - Using reduce, return an integer value for the average of all the index values and/or calculated values in an array.
// - If the Value is a String, use the character Code number for the first letter in the String.
// - Use all four arguments in the callback function in your solution
// - And a ternary wouldn't hurt

const nums1 = [8, 21.3, 16, 55, 22, 44]; // should be 27
const nums2 = [11.12, 43, 56.22, 78, 98, 11]; // should be 49
const nums3 = [2, 1222, 3444, 7254, 83.04444, 1111]; // should be 2186
const nums4 = [2, 1222,'sneeze', 3444, 7254, 8, 'abacus']; //should be 1734

const averages = function(nums) {
	return Math.floor(nums.reduce(function(total, currentValue) {
		return total + (!isNaN(currentValue) ? currentValue : currentValue.charCodeAt(0));
	}, 0) / nums.length);
}

console.log(averages(nums1));
console.log(averages(nums2));
console.log(averages(nums3));
console.log(averages(nums4));


// 4. Choose all the companies that started after 2000 and sort them ascending
let businesses = [
	{ company: 'VISA', startYear: 2000 },
    { company: 'Amex', startYear: 2000 },
    { company: 'Citibank', startYear: 2010 },
    { company: 'Chase', startYear: 1998 },
    { company: 'BOA', startYear: 2012 },
    { company: 'TD', startYear: 1944 },
	{ company: 'Mastercard', startYear: 2011 },
];

let sortedBusinesses = businesses.filter(function(entry) {
	if(entry.startYear >= 2000) {
		return true;
	} else {
		return false;
	}
}).sort(function(a, b) {
	if(a.company < b.company) {
		return -1
	}
	if(b.company > a.company) {
		return 1;
	}
	return 0;
});

console.log(sortedBusinesses);



// 5.
// - Count the number times the same element value appears in an array and display your answer in an object with the element as the key and the number of times as the value
// - Use reduce and use its second argument to initialize the empty object
// - The properties in the object will have a string for the key and a number for the value
// - The key in each property should be the value in the array we are counting.
// - The value in the object property should be the number of times a value appears in the original array.

const arr1 = [5,3,2,5,6]; //should be {'5':2,'3':1,'2':1,'6':1}
const arr2 = [3,1,2,5,2,5,7,5] // should be { '1': 1, '2': 2, '3': 1, '5': 3, '7': 1 }

const arrStats = function(arr) {
	let stats = {};

	for(const entry of arr) {
		if(typeof stats[entry] == "undefined") {
			stats[entry] = 1;
		} else {
			stats[entry]++;
		}
	}

	return stats;
}

console.log(arrStats(arr1));
console.log(arrStats(arr2));


//   6.
//   // You have an array of filenames with extensions.
// // Place the files into arrays based on whether or not they are videos or images.
// // Return the two arrays inside one object
const files = [
    'pavans_first_birthday.mov',
    'owens_asleep_at_the_computer.jpg',
    'michael_fights_a_polar_bear.mp4',
    'nate_road_rage.avi',
    'ruby_skydiving.jpeg',
    'ken_getting_his_black_belt.png',
    'dan_winning_underground_street_race.mov',
    'its_hard_to_come_up_with_file_names.gif',
    'seriously_this_is_taking_too_long.mpg',
    'i_wonder_how_many_of_these_i_should_have.png',
    'probably_a_few_more.avi',
    'nutmeg_is_clawing_my_sneakers_again.mp4',
    'cat_i_will_destroy_you.gif',
    'i_wish_we_had_a_dog.jpeg',
    'stop_looking_at_me_like_that_nutmeg.mpeg',
    'aww_i_cant_hate_you.png',
    'omg_my_sneakers.avi',
	'cat_you_are_the_worst.mp4'
];
//    Video extensions are: .mov, .avi, .mp4, .mpeg, .mpg
//    Image extensions are: .jpb, .gif, .png, .jpeg

const isVideo = function(ext) {
	switch(ext) {
		case "mov":
		case "avi":
		case "mp4":
		case "mpeg":
		case "mpg":
			return true;
		default:
			return false;
	}
}

const isImage = function(ext) {
	switch(ext) {
		case "jpg":
		case "gif":
		case "png":
		case "jpeg":
		case "bmp":
		case "tif":
		case "psd":
			return true;
		default:
			return false;
	}
}

const getExtension = function(filename) {
	return filename.slice((Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1);
}

const categorizeFiles = function(files) {
	let out = {
		images: [],
		videos: []
	};

	for(file of files) {
		let extension = getExtension(file);
		if(isImage(extension)) {
			out.images.push(file);
		}
		if(isVideo(extension)) {
			out.videos.push(file);
		}
	}

	return out;
}

console.log(categorizeFiles(files));

// 7. 
// Create a function called getGrade
// Use switch/case
// Output:
// Grades:
// susie's grade is A
// john's grade is C
// lanie's grade is D
// peter's grade is B
// connie's grade is A
// ----------
// Grade Array:

const grades = [
	{ name: 'susie', gradeNum: 90, grade: 'A' },
    { name: 'john', gradeNum: 77, grade: 'C' },
	{ name: 'lanie', gradeNum: 65, grade: 'D' },
    { name: 'peter', gradeNum: 85, grade: 'B' },
    { name: 'connie', gradeNum: 90, grade: 'A' }
];

function getGrade(grades) {
	let out = "Grades:\n";

	for(grade of grades) {
		out += grade.name + "'s grade is " + grade.grade + '\n';
	}

	return out;
}

console.log(getGrade(grades));

// 8.
// Create a function called getGrade
// Use switch/case
// Output:
// Grades:
// susie's grade is A
// john's grade is C
// lanie's grade is D
// peter's grade is B
// connie's grade is A
// ----------
// Grade Array:

const grades2 = [
	{ name: 'susie', gradeNum: 90 },
	{ name: 'john', gradeNum: 77 },
	{ name: 'lanie', gradeNum: 65 },
    { name: 'peter', gradeNum: 85 },
    { name: 'connie', gradeNum: 90 },
];

//90 and above is an A
//84-89 is a B
//78-84 is a C
//68-77 is a D
//67 and below is an F

const letterGrade = function(num) {
	switch(true) {
		case (num >= 90):
			return 'A';
		case (num >= 84):
			return 'B';
		case (num >= 78):
			return 'C';
		case (num >= 68):
			return 'D';
		default:
			return 'F';
	}
}

getGrade = function(grades) {
	let out = "Grades:\n";

	for(grade of grades) {
		out += grade.name + "'s grade is " + letterGrade(grade.gradeNum) + '\n';
	}

	return out;
}

console.log(getGrade(grades));

/* Note: the instructions show incorrect output, as according to the rules of the instructions.  For example, 67 and below is an F, yet the instructions say that lanie (65) should get a D.  I followed the letter grading system that the instructions provided.  There is an alternative system as found online:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59

Using this system would yield a different result.  However, the instructions provided a different system, so I followed the system in the instructions.

*/