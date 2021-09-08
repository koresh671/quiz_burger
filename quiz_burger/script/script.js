document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const imgBurger = './image/burger.png';
    const viewBurger = 'Стандарт';

    btnOpenModal.addEventListener('click', function() {
        modalBlock.classList.add('d-block');
        playTest();
    });

    closeModal.addEventListener('click', function() {
        modalBlock.classList.remove('d-block');
    });

    const playTest = () => {
        const renderQuestions = () => {
            questionTitle.textContent = 'Какого цвета бургер вы хотите?';

            formAnswers.innerHTML = `
            <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${imgBurger}" alt="burger">
                  <span>${viewBurger}</span>
                </label>
            </div>
            `;
        };
        renderQuestions();
    };
});




