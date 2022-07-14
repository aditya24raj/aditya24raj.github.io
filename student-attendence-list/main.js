function clearStudentDetails()
{
	// set value of all output text fields to empty string
	document.getElementById('student-name').value = '';
	document.getElementById('student-class').value = '';
	document.getElementById('student-section').value = '';
	document.getElementById('student-grade').value = '';
	
}

function fetchStudentDetails()
{
	// an array of student Attendence details
	var studentAttendenceArray = [
		{'studentName': 'Aditya', 'studentClass': 10, 'studentSection': 'a', 'studentGrade': 'B+'},
		{'studentName': 'Peter', 'studentClass':  11, 'studentSection': 'b', 'studentGrade': 'A'},
		{'studentName': 'Tony', 'studentClass': 12, 'studentSection': 'c', 'studentGrade': 'A+'}	
	];
	
	// get student number submitted by user
	var studentNumber = document.getElementById('student-number').value;
	
	// check if studentNumber is empty
	if (studentNumber === '')
	{
		// studentNumber is empty
		
		// show error message
		document.getElementById('error-message').textContent = 'please enter a value!';
		
		// clear any previously shown output
		clearStudentDetails();
		
		// stop code execution
		return;
	}
	
	// studentNumber is not empty
	
	// clear any previously shown error
	document.getElementById('error-message').textContent = '';
	
	// get object stored at stundentNumber index in studentAttendenceArray
	var tempObj = studentAttendenceArray[studentNumber];
	
	// set values from studentAttendenceArray to respective text fields
	document.getElementById('student-name').value = tempObj.studentName;
	document.getElementById('student-class').value = tempObj.studentClass;
	document.getElementById('student-section').value = tempObj.studentSection;
	document.getElementById('student-grade').value = tempObj.studentGrade;
	
}
