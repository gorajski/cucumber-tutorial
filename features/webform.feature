Feature: Is the title correct?

  Scenario: The page loads, it shows the title
    Given I am on the "test" page
    Then the title is equal to "Web form"

  Scenario: 
    Given I am on the "test" page
    When I enter "<text>" into the "<textbox>" textbox
    And I click Submit
    Then the message in the "<element>" element equals "<message>"

    Examples:
    | textbox     | text     | element   | message        |
    | my-text     | Selenium | lead      | Received!      |
    | my-password | 12345678 | lead      | Received!      |
    | my-password | 12345678 | display-6 | Form submitted |
    