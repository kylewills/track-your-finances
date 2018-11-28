    
/* local stoarge */

 Local Storage - You can stringify entire object and save everything at once:
var localStorage;

localStorage.setItem('event', JSON.stringify({
    budgetLabel:'budgetLabel',
    incomeLabel : 'incomeLabel',
    expensesLabel:'expenseslabel'
}));

 var eventData = JSON.parse(localStorage.getItem('event'));



----------------------------------------------------------------------------------

function local(budgetLabel, incomelabel, expensesLabel){
       var eventData = JSON.parse(localStorage.getItem('eventData '));
       if(eventData ==null){
           eventData=[];
       }

        Var details={};
       details["budgetlabel"]=budgetlabel;
       details["incomelabel"]=incomelabel;
       details["expenseslabel"]=expensesLabel;
       
      eventData.push(details);

      localStorage.setItem('eventData', JSON.stringify(eventData));
    }

//While retrieving parse the string to json u'll get the array of those click event details.

var EventDetails=JSON.parse(localStorage.getItem('eventData '));




---------------------------------------------------------------------------------------------------------


// Local Storage - You can stringify entire object and save everything at once:

localStorage.setItem('event', JSON.stringify({
    budgetlabel:budgetlabel,
    incomeLabel:incomelabel,
    expenseslabel:expensesLabel
}));

//It will also make the code simpler and shorter:

function local(budgetLabel, incomelabel, expensesLabel) {

    // Save data to the current local store//
    if (typeof (localStorage) == 'undefined') {
        console.log('Your browser does not support HTML5 localStorage. Try upgrading.');
    } else {
        try {
            // Put the object into storage
            localStorage.setItem('event', JSON.stringify({
                budgetlabel:budgetlabel,
                incomeLabel:incomelabel,
                expenseslabel:expensesLabel
            }));
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.log('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
            }
        }
    }
}

//And retrieving saved event data you can simply do reverse://

var eventData = JSON.parse(localStorage.getItem('event'));


---------------------------------------------------------------------------------------

vvar = localStorage;

var htmlContents = document.documentElement.innerHTML;
localStorage.setItem('myBook', JSON.stringify(htmlContents ));

localStorage.getItem('myBook');