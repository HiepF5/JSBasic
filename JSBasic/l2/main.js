// Đối tượng Validator
function Validator(options) {
    var selectorRules = {};
    function Validate(inputElement, rule){
        //Ham thuc hien validate
        var errorMessage;// =  rule.test(inputElement.value);
        //console.log(errorMessage);
        var errorElement =  inputElement.parentElement.querySelector(options.errorSelector);
        //Lay cac rules cua selector
        var rules = selectorRules[rule.selector];
        //lap qua tung rules
        for(var i =0 ;i<rules.length ; i++){
            errorMessage = rules[i] (inputElement.value);
            if(errorMessage)break;
        }
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText=' ';
            inputElement.parentElement.classList.remove('invalid');
        }
        
        // console.log('blur ' + rule.selector);
        // console.log(rule)
    }
    // Lay Element cua form can validate
    var formElement = document.querySelector(options.form);
    console.log(options.rules)
    if(formElement){
        // lap qua moi rule và xu li
        formElement.onsubmit = function(e) {
            e.preventDefault();
            //thuc hien lap qua tung rules va validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                Validate(inputElement,rule);
            });
        }

        options.rules.forEach(function(rule){
            // luu cac rules
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }
            else{
                selectorRules[rule.selector]=[rule.test];
            }
            
            //console.log(rule.selector)
            var inputElement = formElement.querySelector(rule.selector);
            //console.log(inputElement);  
            if(inputElement){
                //xu li truong hop blur khoi input
                inputElement.onblur = function() { 
                   Validate(inputElement,rule);

                }
                //xu li moi khi nguoi dung nhap vao input
                inputElement.oninput = function(){
                    var errorElement =  inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText=' ';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
        console.log(selectorRules);
    }
}
//Định Nghĩa rules
//Nguyen tac rulus
//1. Khi co loi => Tra ra messae loix
//2. Khi hop le => Khong tra ra cai gi ca
Validator.isRequired = function (selector, message){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : message || 'Vui long nhap truong nay';


        }
    };
}
Validator.isEmail = function (selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :message || 'Vui Long nhap email';
        }
    };
}
Validator.minLength = function (selector, min, message){
    return {
        selector: selector,
        test: function(value){
            
            return value.length >= min  ? undefined : message || `Vui Long nhap toi thieu ${min} ki tu`;
        }
    };
}
Validator.isConfirmed= function (selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value===getConfirmValue() ? undefined: message || 'Gia tri nhap vao khong chinh xac';
        }
    };
}