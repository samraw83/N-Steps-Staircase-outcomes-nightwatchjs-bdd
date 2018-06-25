Feature: Staircase N steps Possible Outputs

Scenario Outline: Find Number of Outcomes for N steps staircase on taking combination of 1 & 2 steps

Given The Number of Steps in staircase is <stepsCount>
When Users gets the possible outcomes count as <combinations>
Then The Combinations Result should be <Result>

Examples:
|stepsCount|combinations|Result|
|10|89|89|