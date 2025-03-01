function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (dobInput === '') {
        alert('Please enter your date of birth!');
        return;
    }
    const dob = new Date(dobInput);
    const today = new Date();
    
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
    resultDiv.classList.add('visible');
}

function resetForm() {
    document.getElementById('dob').value = '';
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.classList.remove('visible');
}