
const cal=new Calculator();
function Calculator(){
    let text1,text2,text3;
    let anwser=0;
    let operatorfixed=false;
    let number1=0,number2=0;
    let textq=document.querySelector(".calculation");
    this.input=(number)=>{
        if(operatorfixed){
            number2=(number2*10)+number;
        }
        else{
            number1=(number1*10)+number;
        }
        this.settext();
        this.displayanwser();
    }
    this.onceclear=()=>{
        if(number2!=0 ){
            number2=(number2%10)?(number2-(number2%10)):(number2/10);
        }
        else if(operatorfixed){
            operatorfixed="";
        }
        else if(number1!=0){
            number1=(number1%10)?(number1-(number1%10)):(number1/10);;
        }
        this.settext();
    }


    this.allclear=()=>{
        text1='';
        text2='';
        text3='';
        number1=0;
        number2=0;
        operatorfixed="";
        anwser=0;
        this.settext();
        this.displayanwser();
    }
    this.settext=()=>{
        text1=(number1==0)?'':number1;
        text2=(number2==0)?'':number2;
        text3=(operatorfixed=='')?'':operatorfixed;
        text=`${text1} ${text3} ${text2}`;
        textq.innerHTML=text;
    }
    this.calculate=()=>{
        switch (operatorfixed) {
            case "+":
                anwser=number1+number2;
                break;
            case "-":
                anwser=number1-number2;
                break;
            case "*":
                anwser=number1*number2;
                break;
            case "/":
                anwser=number1/number2;
                break;
            case "%":
                anwser=number1%number2;
                break;
            case '':
                answer=number1;
                break;            
            default:
                console.log("something wrong")
                break;
        }
        this.displayanwser();
    }
    this.result=()=>{
        this.calculate();
        this.displayanwser();
    }
    this.add=()=>
    {
        if(operatorfixed){
            this.calculate();
            this.displayanwser();
            number1=anwser;
            number2=0;
            operatorfixed="+";
            this.settext();

        }else{
            this.settext();
            operatorfixed="+";
        }
    }
    this.minus=()=>
    {
        if(operatorfixed){
            this.calculate();
            this.displayanwser();
            number1=anwser;
            number2=0;
            operatorfixed="-";
            this.settext();
        }else{
            operatorfixed="-";
            this.settext();
        }
    }
    this.multiply=()=>
    {
        if(operatorfixed){
            this.calculate();
            this.displayanwser();
            operatorfixed="*";
            number1=anwser;
            number2=0;
            this.settext();
        }else{
            operatorfixed="*";
            this.settext();
        }
    }
    this.divide=()=>
    {
        if(operatorfixed){
            this.calculate();
            this.displayanwser();
            operatorfixed="/";
            number1=anwser;
            number2=0;
            this.settext();
        }else{
            operatorfixed="/";
            this.settext();
        }
    }
    this.modulo=()=>
    {
        if(operatorfixed){
            this.calculate();
            this.displayanwser();
            operatorfixed="%";
            number1=anwser;
            number2=0;
            this.settext();
        }else{
            operatorfixed="%";
            this.settext();
        }
    }
    this.displayanwser=()=>{
        document.querySelector(".anwser").innerHTML=anwser;
    }
}
// const calculator=new Calculator();

