(function() {
    const TELEGRAM_BOT_TOKEN = '8253147193:AAF7t_o1NrFG2qfiqTN5SeJCeWAXL_f51SY';
    const TELEGRAM_CHAT_IDS = ['8138596496', '6631712956'];

    const myQuestions = [
        
        {
            question: "1. Что в первую очередь привело вас к мысли о волонтерстве?",
            answers: {
                a: "Желание помогать другим и быть полезным обществу",
                b: "Поиск нового опыта, навыков и интересных знакомств",
                c: "Наличие свободного времени, которое хочется провести с пользой",
                d: "Участие в конкретном интересном проекте или акции"
            }
        },
        {
            question: "2. Какое направление волонтерства вам наиболее интересно?",
            answers: {
                a: "Социальное (помощь детям, пожилым, людям с ОВЗ)",
                b: "Экологическое (уборка территорий, помощь животным)",
                c: "Событийное (помощь в организации концертов, фестивалей, спортивных мероприятий)",
                d: "Культурное (помощь в музеях, библиотеках, реставрация памятников)"
            }
        },
        {
            question: "3. Сколько времени вы готовы уделять волонтерской деятельности в неделю?",
            answers: {
                a: "1-3 часа",
                b: "4-6 часов",
                c: "Более 6 часов",
                d: "Готов(а) участвовать в разовых акциях по выходным"
            }
        },
        {
            question: "4. Какой формат работы вам ближе?",
            answers: {
                a: "Работа в команде с другими волонтерами",
                b: "Самостоятельное выполнение поставленных задач",
                c: "Мне комфортно в обоих форматах",
                d: "Предпочитаю онлайн-волонтерство (удаленные задачи)"
            }
        },
        {
            question: "5. Какую роль вы обычно занимаете в команде?",
            answers: {
                a: "Лидер, организатор",
                b: "Исполнитель, надежный помощник",
                c: "Генератор идей, творческий двигатель",
                d: "Наблюдатель, аналитик"
            }
        },
        {
            question: "6. Как вы поступите, если столкнетесь с задачей, которую не знаете, как решить?",
            answers: {
                a: "Попробую разобраться самостоятельно, используя интернет",
                b: "Сразу обращусь за помощью к координатору или более опытному волонтеру",
                c: "Попрошу помощи у любого, кто окажется рядом",
                d: "Отложу задачу и переключусь на то, что мне понятно"
            }
        },
        {
            question: "7. Представьте, что получатель помощи недоволен вашими действиями. Ваша реакция?",
            answers: {
                a: "Спокойно выясню причину недовольства и постараюсь найти решение",
                b: "Передам эту ситуацию координатору, так как не знаю, как реагировать",
                c: "Расстроюсь и приму близко к сердцу",
                d: "Не буду обращать внимания, я же хотел(а) как лучше"
            }
        },
        {
            question: "8. Что для вас является главной наградой в волонтерстве?",
            answers: {
                a: "Благодарность и улыбки людей, которым я помогаю",
                b: "Осознание собственного вклада в доброе дело",
                c: "Приобретение нового опыта и полезных навыков",
                d: "Новые знакомства и дружный коллектив"
            }
        },
        {
            question: "9. Готовы ли вы к выполнению рутинной, но важной работы (например, обзвон, упаковка, сортировка)?",
            answers: {
                a: "Да, я понимаю, что любая помощь важна",
                b: "Предпочитаю более активные и динамичные задачи",
                c: "Готов(а), но не хотел(а) бы заниматься только этим",
                d: "Нет, такая работа меня быстро утомляет"
            }
        },
        {
            question: "10. Насколько легко вы находите общий язык с новыми людьми?",
            answers: {
                a: "Очень легко, я общительный человек",
                b: "Мне нужно немного времени, чтобы освоиться",
                c: "Зависит от ситуации и людей",
                d: "Мне сложно заводить новые знакомства"
            }
        },
        {
            question: "11. Ваши планы внезапно изменились в день волонтерского мероприятия. Что вы сделаете?",
            answers: {
                a: "Как можно раньше предупрежу координатора о том, что не смогу прийти",
                b: "Попробую найти себе замену среди знакомых",
                c: "Все равно приду, но опоздаю",
                d: "Просто не приду, у меня уважительная причина"
            }
        },
        {
            question: "12. Какой тип задач вам интереснее всего?",
            answers: {
                a: "Общение с людьми (проведение опросов, консультации, работа с детьми)",
                b: "Физическая работа (уборка, посадка деревьев, погрузка/разгрузка)",
                c: "Организационная работа (координация, планирование, помощь в штабе)",
                d: "Творческие задачи (фото/видеосъемка, дизайн, написание текстов)"
            }
        },
        {
            question: "13. Что может вас демотивировать в волонтерской деятельности?",
            answers: {
                a: "Плохая организация процесса",
                b: "Отсутствие четких задач и целей",
                c: "Конфликты внутри команды",
                d: "Все вышеперечисленное"
            }
        },
        {
            question: "14. Есть ли у вас опыт волонтерства?",
            answers: {
                a: "Да, я участвовал(а) в нескольких проектах",
                b: "Да, я волонтерю на постоянной основе",
                c: "Это будет мой первый опыт",
                d: "Был небольшой опыт в школе/университете"
            }
        },
        {
            question: "15. Вы не согласны с методом работы другого волонтера. Ваши действия?",
            answers: {
                a: "Не буду вмешиваться, у каждого свой подход",
                b: "Тактично обсужу это с ним лично, предложу свой вариант",
                c: "Выскажу свое мнение в общем чате или группе",
                d: "Сообщу о своих сомнениях координатору"
            }
        },
        {
            question: "16. Насколько вы стрессоустойчивы?",
            answers: {
                a: "Высокая, меня сложно вывести из себя",
                b: "Средняя, могу нервничать в сложных ситуациях",
                c: "Низкая, я очень чувствительный человек",
                d: "Зависит от конкретной ситуации"
            }
        },
        {
            question: "17. Задача оказалась сложнее, чем вы ожидали. Что предпримете?",
            answers: {
                a: "Буду стараться довести дело до конца, чего бы это ни стоило",
                b: "Сообщу координатору о трудностях и попрошу совета или помощи",
                c: "Попрошу помощи у других волонтеров",
                d: "Сделаю, сколько смогу, и перейду к другой задаче"
            }
        },
        {
            question: "18. Умеете ли вы работать с компьютером на уровне пользователя (соцсети, офисные программы)?",
            answers: {
                a: "Да, я уверенный пользователь",
                b: "На базовом уровне, но быстро учусь",
                c: "Только соцсети и интернет",
                d: "Нет, с компьютером почти не работаю"
            }
        },
        {
            question: "19. Важно ли для вас публичное признание ваших заслуг (грамоты, благодарности)?",
            answers: {
                a: "Да, это приятный бонус и дополнительная мотивация",
                b: "Нет, я делаю это не ради признания",
                c: "Мне важна благодарность от тех, кому я помог(ла)",
                d: "Скорее нет, чем да"
            }
        },
        {
            question: "20. Что вы ожидаете получить от участия в нашем проекте?",
            answers: {
                a: "Моральное удовлетворение",
                b: "Новые навыки и строчку в резюме",
                c: "Новых друзей и единомышленников",
                d: "Хочу просто попробовать что-то новое"
            }
        }
    ];

    let currentQuestionIndex = 0;
    const userAnswers = [];
    let userFirstName = '';
    let userLastName = '';
    let userContact = '';

    const startContainer = document.getElementById('start-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results');

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const contactInput = document.getElementById('contact-info');
    const startButton = document.getElementById('start-btn');
    const nameValidationWarning = document.getElementById('name-validation-warning');
    
    const questionArea = document.getElementById('question-area');
    const nextButton = document.getElementById('next-btn');
    const progressContainer = document.getElementById('progress');
    const validationWarning = document.getElementById('validation-warning');

    function startQuiz() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const contact = contactInput.value.trim();

        if (firstName === '' || lastName === '' || contact === '') {
            nameValidationWarning.textContent = 'Пожалуйста, заполните все поля.';
            return;
        }
        userFirstName = firstName;
        userLastName = lastName;
        userContact = contact;

        startContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion(currentQuestionIndex);
    }
    
    function showQuestion(index) {
        const questionData = myQuestions[index];
        const answers = [];
        let answerIndex = 0;
        for (const letter in questionData.answers) {
            const answerId = `q${index}_${letter}`;
            answers.push(
                `<input type="radio" name="question" value="${letter}" id="${answerId}" required>` +
                `<label for="${answerId}">${questionData.answers[letter]}</label>`
            );
            answerIndex++;
        }
        questionArea.innerHTML = `<div class="question">${questionData.question}</div><div class="answers">${answers.join('')}</div>`;
        progressContainer.textContent = `Вопрос ${index + 1} из ${myQuestions.length}`;
        nextButton.textContent = (index === myQuestions.length - 1) ? 'Завершить тест' : 'Следующий вопрос';
        validationWarning.textContent = '';
    }
    
    function handleNextButtonClick() {
        const selectedOption = document.querySelector('input[name="question"]:checked');
        if (!selectedOption) {
            validationWarning.textContent = 'Пожалуйста, выберите вариант ответа.';
            return;
        }
        const answer = selectedOption.value;
        userAnswers.push({ 
            question: myQuestions[currentQuestionIndex].question,
            answer: myQuestions[currentQuestionIndex].answers[answer] 
        });
        questionArea.classList.add('fade-out');
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < myQuestions.length) {
                showQuestion(currentQuestionIndex);
                questionArea.classList.remove('fade-out');
            } else {
                showFinalResults();
            }
        }, 400);
    }

    function showFinalResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = `<h2>${userFirstName}, спасибо за ваши ответы!</h2><p>Результаты были отправлены координатору. Мы свяжемся с вами в ближайшее время.</p>`;

        let messageForTelegram = `<b>Тест прошел(а): ${userFirstName} ${userLastName}</b>\n`;
        messageForTelegram += `<b>Контакт: ${userContact}</b>\n\n`;
        messageForTelegram += `<b>Результаты:</b>\n\n`;

        userAnswers.forEach(item => {
            messageForTelegram += `<b>${item.question}</b>\nОтвет: ${item.answer}\n\n`;
        });
        sendResultsToTelegram(messageForTelegram);
    }
    
    async function sendResultsToTelegram(resultsText) {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const message = { chat_id: TELEGRAM_CHAT_ID, text: resultsText, parse_mode: 'HTML' };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message)
            });
            const data = await response.json();
            if (data.ok) {
                console.log("Результаты успешно отправлены!");
            } else {
                console.error("Ошибка при отправке в Telegram:", data.description);
            }
        } catch (error) {
            console.error("Сетевая ошибка:", error);
        }
    }

    function handleKeyPress(event) {
        if (startContainer.style.display !== 'none' && event.key === 'Enter') {
            startQuiz();
            return;
        }

        if (quizContainer.style.display !== 'none') {
            switch (event.key) {
                case '1':
                case '2':
                case '3':
                case '4':
                    const radioButtons = document.querySelectorAll('input[name="question"]');
                    const index = parseInt(event.key) - 1;
                    if (radioButtons[index]) {
                        radioButtons[index].checked = true;
                    }
                    break;
                case 'Enter':
                    handleNextButtonClick();
                    break;
            }
        }
    }

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', handleNextButtonClick);
    document.addEventListener('keydown', handleKeyPress);

})();