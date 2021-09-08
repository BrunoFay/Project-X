#Salary calculation in Brazil with inss and IR discounts
salaryLiquid = " "
loop do
    puts "your salary liquid is #{salaryLiquid}R$ "
    puts "---------------------"
    puts " put your Salary Brut "
    salaryBrut = gets.chomp.to_f
    system "clear"
    inss = " "
    if salaryBrut <= 1556.94
        inss = salaryBrut * 0.08
        
    elsif salaryBrut >= 1556.95 and salaryBrut <= 2594.92
        inss = salaryBrut * 0.09;
    
    elsif salaryBrut >= 2594.93  and salaryBrut <= 5189.82
        inss = salaryBrut * 0.11;
    
    elsif salaryBrut > 5189.82
        inss = 570.88
    end
        salaryBase = salaryBrut - inss;
        ir = " "
        if salaryBase <= 1903.98
            ir = 0
            
        elsif salaryBase >= 1903.99 and salaryBase <= 2826.65
            ir = (salaryBase * 0.075) - 142.8
        elsif salaryBase >= 2826.66 and salaryBase <=  3751.05
            ir = (salaryBase * 0.15) - 354.8;
        
        elsif salaryBase >= 3751.06 and salaryBase <= 4664.68
            ir = (salaryBase * 0.225) - 636.13;
        
        elsif salaryBase > 4664.68       
            ir = (salaryBase * 0.275) - 869.36;    
        end
            salaryLiquid = (salaryBase -ir)
end