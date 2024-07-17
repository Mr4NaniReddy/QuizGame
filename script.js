$(document).ready(function(){
    const quizQuestions = [
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "What does CSS Stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML Stands for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "None of the above",
            correct: "b",
        },
    ];

    let currentQuestion = 0;
    let score = 0;

    const $quiz = $('#quiz');
    const $question = $('#question');
    const $answer = $('.answer');
    const $a_answer = $('#a_answer');
    const $b_answer = $('#b_answer');
    const $c_answer = $('#c_answer');
    const $d_answer = $('#d_answer');
    const $submit = $('#submit');


    StartQuestions();


    
    function StartQuestions(){
        unselect();

        $question.text(quizQuestions[currentQuestion].question);
        $a_answer.text(quizQuestions[currentQuestion].a);
        $b_answer.text(quizQuestions[currentQuestion].b);
        $c_answer.text(quizQuestions[currentQuestion].c);
        $d_answer.text(quizQuestions[currentQuestion].d);
        
    }

    function unselect(){
        $answer.prop('checked', false);
    }

    function getSelected(){
      let ans;
      $answer.each(function(){
        if($(this).is(':checked')){
            ans = $(this).attr('id');
        }
      })
      return ans;
    }

    $submit.on('click', function(){
        const ans = getSelected();
        if(ans){
            if (ans === quizQuestions[currentQuestion].correct){
                score++;
            }
            currentQuestion++;
            if(currentQuestion < quizQuestions.length){
                StartQuestions();
            }else{
                $quiz.html(`
                    <h3>You answered ${score}/${quizQuestions.length} questions correctly</h3>
                    <button onclick="location.reload()">Reload</button>    
                `);
            }
        }
    })
});