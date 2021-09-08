result = " "
loop do
    puts result
    puts "Select an option"
    puts "1- find out a person's age"
    puts "0- exit"
    puts "options: "

    option = gets.chomp.to_i

    if option == 1
        print "put the year of birth "
        yearOfBirth = gets.chomp.to_i
        print "put the current year "
        currentYear = gets.chomp.to_i
        age = currentYear - yearOfBirth
        result = "who was born in #{yearOfBirth}, is #{age} years old"
    elsif option == 0
        break
    else
        result = "invalid option"
    end
    system "clear"


















end