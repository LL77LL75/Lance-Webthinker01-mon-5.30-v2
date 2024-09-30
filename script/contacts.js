let validate = () => {
		let name = document.getElementById('contactName');
		if (name.value.length != 0) {
			name.classList = "form-control";
			document.getElementById('contactNameFeedback').classList = "d-none text-danger";
		} else {
			name.classList = "form-control is-invalid";
			document.getElementById('contactNameFeedback').classList = "text-danger";
		}
	
		let email = document.getElementById('contactEmail');
		if (email.value.length != 0) {
			email.classList = "form-control";
			document.getElementById('contactEmailFeedback').classList = "d-none text-danger";
		} else {
			email.classList = "form-control is-invalid";
			document.getElementById('contactEmailFeedback').classList = "text-danger";
		}
	
		let subject = document.getElementById('contactSubject');
		if (subject.value.length != 0) {
			subject.classList = "form-control";
			document.getElementById('contactSubjectFeedback').classList = "d-none text-danger";
		} else {
			subject.classList = "form-control is-invalid";
			document.getElementById('contactSubjectFeedback').classList = "text-danger";
		}
	
		let message = document.getElementById('contactMessage');
			if (message.value.length != 0) {
				message.classList = "form-control";
				document.getElementById('contactMessageFeedback').classList = "d-none text-danger";
			} else {
				message.classList = "form-control is-invalid";
				document.getElementById('contactMessageFeedback').classList = "text-danger";
			}

			if (document.querySelectorAll('.is-invalid').length === 0) window.location.reload();
		}
	let check = (x) => {
		if (x.value.length != 0) {
			return true
		}else {return false}
	}
	let a = [3,546,3457679,234524,4356887,34576869,124436,43568,95645,1235,467,8,5,3,67,8,4,3,4,7,8,9,6,4,3,2,2]
	if (check(a) = true) ()=> {
		console.log(true)
	}