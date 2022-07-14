function onLoad (executionContext){
    var formContext = executionContext.getFormContext();

    //create new date to store todays date
    var todaysDate = new Date();
    var dd = String(todaysDate.getDate()).padStart(2, '0');
    var mm = String(todaysDate.getMonth() + 1).padStart(2, '0');
    var yyyy = todaysDate.getFullYear();
    todaysDate = dd + '/' + mm + '/' + yyyy;

    //retrieve First Response By date from the Case form
    var duebyDate = new Date();
    var responseByDate = formContext.getAttribute("responseby").getValue();
    if(responseByDate != null){
    var dd2 = String(responseByDate.getDate()).padStart(2, '0');
    var mm2 = String(responseByDate.getMonth() + 1).padStart(2, '0');
    var yyyy2 = responseByDate.getFullYear();
    //stripping out Time from DateTime 
    duebyDate =  dd2 + '/' + mm2 + '/' + yyyy2;
    }

    if(duebyDate == todaysDate){
    formContext.ui.setFormNotification("This Case is Due Today", "WARNING", "1");
    }
    else{
    formContext.ui.clearFormNotification("1")
    }
}
