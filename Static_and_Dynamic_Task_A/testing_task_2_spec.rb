require('minitest/autorun')
require_relative('./testing_task_2.rb')
require_relative('./card.rb')

class FunctionsTest < MiniTest::Test

    def test_ace_found_when_card_value_one()
        card1 = Card.new("Hearts", 1)
        expected = true
        actual = CardGame.check_for_ace(card1)
        assert_equal(expected, actual)
    end

    def test_ace_not_found_when_card_value_not_one()
        card1 = Card.new("Spades", 2)
        expected = false
        actual = CardGame.check_for_ace(card1)
        assert_equal(expected, actual)
    end

    def test_highest_card_returned_first_parameter_highest()
        card1 = Card.new("Hearts", 10)
        card2 = Card.new("Hearts", 2)
        expected = card1
        actual = CardGame.highest_card(card1, card2)
        assert_equal(expected, actual)
    end

    def test_highest_card_returned_second_parameter_highest()
        card1 = Card.new("Hearts", 2)
        card2 = Card.new("Hearts", 10)
        expected = card2
        actual = CardGame.highest_card(card1, card2)
        assert_equal(expected, actual)
    end

    def test_sum_of_all_card_values()
        card1 = Card.new("Hearts", 2)
        card2 = Card.new("Hearts", 10)
        cards = [card1, card2]
        expected = "You have a total of 12"
        actual = CardGame.cards_total(cards)
        assert_equal(expected, actual)
    end

end