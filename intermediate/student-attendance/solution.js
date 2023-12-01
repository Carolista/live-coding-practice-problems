/*
	NOTES
		P, L, or A - present, late, or absent
		write a function
		input is an array of strings - one per student
		drop if LLL (consecutive) or if A appears more than twice (not consecutive)
		print "drop" or "ok"
*/

/*
	QUESTIONS
		Is the input always uppercase? Should I plan for either?
		Will the strings ever be of varying lengths?
		Will the strings always be at least 3 characters long?
		Do you have sample data?
*/

/*
	PSEUDOCODE
	function should accept array
		loop through array by index using length
			if string includes LLL, print "drop"
			otherwise loop through string
				if more than 2 A, print "drop"
				otherwise print "ok"
*/

// TEST DATA
let attendanceRecords = ["PPLPAPLLP", "PPLPAPLAA", "PLAPLPAPP", "PPPAPPLLL", "LPPPPLPPP"];

/* 
  Solution 1
*/

function evaluateAttendance(records) {
	for (let i=0; i < records.length; i++) {
		if (records[i].includes("LLL")) {
			console.log("drop");
		} else {
			let countA = 0;
			for (let j=0; j < records[i].length; j++) {
				if (records[i][j] === "A") {
					countA++
				} 
			}
			if (countA > 2) {
				console.log("drop");
			} else {
				console.log("ok");
			}
		}
	}
}

evaluateAttendance(attendanceRecords); 

/* 
  Solution 2
*/

// Use .split and .join to remove "A"s and compare lengths
function evaluateAttendance2(records) {
	for (let i=0; i < records.length; i++) {
		if (records[i].includes("LLL")) { // could combine first two with || but would be a long line
			console.log("drop");
		} else if (records[i].length - records[i].split("A").join("").length > 2) {
			console.log("drop");
		} else {
			console.log("ok");
		}
	}
}

// evaluateAttendance2(attendanceRecords);


/*
  Solution 3 — Advanced JS syntax & RegEx
*/

const evaluateAttendance3 = records => {
	records.forEach(record => {
		if (record.includes("LLL")) console.log("drop");
		else if (record.includes("A") && record.match(/A/g).length > 2) console.log("drop");
		else console.log("ok");
	});
};

// evaluateAttendance3(attendanceRecords);