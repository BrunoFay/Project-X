#if ,else if and else
day = "friday"
if day == "sunday"
    lunch = "barbecue"
elsif day == "friday"
    lunch = "hamburger"
else
    lunch = "normal"    
end
puts "the lunch is #{lunch}"

#unless and if not have the same value
barStatus = "open"
unless barStatus == "closed"
    happyhour = "let's goo!"
else
     happyhour = "maybe tomorrow"
end
puts happyhour

weather = "snowing"
if not weather == "snowing"
    puts "let's go outside for a walk"
else 
    puts "let's make some hot chocolate"   
end 

#case

month = 1
case month
when 3..6
    puts "we are in autumn"
when 6..9
    puts "we are on winter"
when 9..11
    puts "we are in spring" 
    
else
    puts "we are in summer"
end