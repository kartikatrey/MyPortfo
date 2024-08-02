document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-button');
    const phoneNumber = document.getElementById('phone-number').textContent;
    const confirmationMessage = document.getElementById('confirmation-message');

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            confirmationMessage.classList.remove('hidden');
            setTimeout(() => {
                confirmationMessage.classList.add('hidden');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
