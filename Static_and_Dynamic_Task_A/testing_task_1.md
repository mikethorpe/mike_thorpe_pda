### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  # extra line should be removed
  # naming of method should be snake case
  # missing self keyword in method definition
  def checkforAce(card)
    # comparator syntax is incorrect - should be == rather than =
    if card.value = 1
      return true
    else
      return false
    end
  end

  # typo in function definition - keyword should be def, not dif
  # comma needed to separate method parameters
  # missing self keyword in method definition
  dif highest_card(card1 card2)
  # conditional statement not indented
  if card1.value > card2.value
    # Card has no name property - we should return card1 here as it has
    # highest value
    return card.name
  else
    card2
  end
end
# End statement should be at end of class
end

# function should be indented

# cards passed are those to be checked - we do not have a cards property
# so self is not required as this method should be static
def self.cards_total(cards)
  # need to declare total starting at 0
  total
  for card in cards
    total += card.value
    # return statment should be at end of function
    # total should be converted to a string
    # should have a space after of for output string to be nicely formatted
    return "You have a total of" + total
  end
end


```
