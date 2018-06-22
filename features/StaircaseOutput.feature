Feature: Staircase N steps Possible Outputs

Scenario Outline: Find Number of Outcomes for N steps staircase on taking combination of 1 & 2 steps

When User enters the staircase steps count as <stepsCount>
Then Users gets the possible outcomes count as <combinations>

Examples:
|stepsCount|combinations|
|10|89|