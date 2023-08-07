Feature: Test Regis Functionality

    Scenario: check register with valid credentials
        Given user is register page
        When user filled form register
        And click on register button
        Then user see popup register success
