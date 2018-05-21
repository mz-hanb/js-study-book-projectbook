
function Quiz(stQuizContainer, data){
  var $quiz = $(stQuizContainer);  
  var stages = $quiz.find('.stage');  

  // quiz stage
  var $stageQuiz = $quiz.find('.stage-quiz');
  var $question = $stageQuiz.find('.question');
  var givens = $stageQuiz.find('.givens li button');
  var $qNum = $stageQuiz.find('.quiz-num');  

  // result stage
  var $stageResult = $quiz.find('.stage-reasult');
  var $userRightNum = $stageResult.find('.user-right-num');
  var $userTotal = $stageResult.find('.user-total');
  var $reasultMent = $stageResult.find('.reasult-ment');

  // quiz vars
  var quizData = data;
  var quizTotal = data.length;  
  var currentQNum = -1;
  var currentRight = -1; // 임의의 초기화 값
  var rightNum = 0;
  var scoreUnit = parseInt( 100/quizTotal );

  
  init();
  setStage('result');
  setQuiz(1);  


  // var idx = -1;

  function init(){
    givens.on('click', function(e){      
      // console.log( $( givens ).index(this) ); // http://blog.freezner.com/archives/261      
      checkAnswer( $(givens).index(this) + 1 );
      
    });
  }

  function checkAnswer( userAnswer ){
    console.log( userAnswer );
    var ment = '틀렸어요~';
    
    if( userAnswer ===  currentRight ){
      ment = '맞았어요';
      rightNum++;
    }
    alert( ment );
    setQuiz( currentQNum + 1 );    
  }  

  function setQuiz(qNum){    
    console.log( 'setQuiz:  ' + qNum );
    if( qNum > quizTotal ){
      setStage('result');
      return;
    }
    currentQNum = qNum;
    var currentQ = data[qNum-1];
    currentRight = currentQ.right;
    $question.text( '문제 ' + qNum + ' ) ' + currentQ.q );    
    
    givens.each(function(idx){      
      $(this).text( currentQ.given[idx] );
    });   
    $qNum.text( '문제 '+ currentQNum + ' / ' + quizTotal);  
  }

  function setStage(stageName){
    console.log( 'setStage>>>> ' + stageName);
    stages.hide();
    if( stageName === 'quiz'){      
      $(stages[0]).show();
    }else{
      console.log( 'last ');
      $(stages[1]).show();
      showResult();      
    }
  }  

  function showResult(){
    $userRightNum.text('당신의 점수: ' + rightNum + '/' + quizTotal );
    $userTotal.text( scoreUnit * rightNum + ' 점' );
    $reasultMent.text( getResultMent() );
  }

  function getResultMent(){
    if(rightNum >= 4)
  }
}
