document.getElementById('consultation-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Consultation booked successfully!');
});
document.getElementById('reason').addEventListener('change', function() {
    var otherReasonInput = document.getElementById('other-reason');
    if (this.value === 'other') {
      otherReasonInput.style.display = 'block';
      otherReasonInput.setAttribute('required', 'required'); // Make the input required if "Other" is selected
    } else {
      otherReasonInput.style.display = 'none';
      otherReasonInput.removeAttribute('required'); // Remove the required attribute if another option is selected
    }
  });