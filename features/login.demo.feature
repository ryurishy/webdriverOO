Feature: Test Login Functionality

    Scenario Outline: check login with valid credentials

        Given user is login page
        When user enters rizkyyurishy@gmail.com and 03N@ve1992
        And clicks on login button
        Then user is navigated to the home page


    Scenario Outline: check login with invalid credentials

        Given user is login page
        When user enters <email> and <password>
        And clicks on login button
        Then user can see warning <message>


    Examples:
        |           email           |   password        |                   message             |
        |   muktafisujono@gmail.com |   123123123       |   Kombinasi email dan password salah  |