result = " "
loop do
    puts "The resulted is #{result}"
    puts "-----------------"
    puts "choice an opition"
    puts "1- calculate"
    puts "0- exit"
    puts "options: "
    
    choiceCalc = gets.chomp.to_i
   system "clear" 
    if choiceCalc == 1
        print "which math operation do you want to do? "
        mathOperation = gets.chomp
        print "first number "
        number1 = gets.chomp.to_i
        print "second number "
        number2 = gets.chomp.to_i
        if mathOperation == "addition"
           result = number1 + number2; 
            
        elsif mathOperation == "subtraction"
            result = number1 - number2;
        
        elsif mathOperation == "division"
            result = number1 / number2;

        elsif mathOperation == "multiplication"
            result = number1 * number2

        elsif mathOperation == "module" 
            result = number1 % number2
        
        elsif mathOperation == "exponential"
            result = number1 ** number2
        end 
    
    elsif choiceCalc == 0
        break    

    else
        print "error"
    end    
    system "clear"
end