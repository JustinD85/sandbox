using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NumberWizard : MonoBehaviour
{
    int min;
    int max;
    int guessedNumber;

    // Start is called before the first frame update
    void Start()
    {
        BeginGame(); 
    }

    void Me() { }
    // Update is called once per frame
    void Update()
    {
        
        if (Input.GetKeyDown(KeyCode.UpArrow))
        {
            Log("Argh, I'll guess higher then...");
            min = guessedNumber;
            NextGuess();
        }
        else if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            Log("Argh, I'll guess lower then...");
            max = guessedNumber;
            NextGuess();
        }
        else if(Input.GetKeyDown(KeyCode.Return))
        {
            Log("Woohoo. I win!");
            BeginGame();  
        }
    }
    void BeginGame()
    {
         min = 0;
         max = 1000;
         guessedNumber = 500;

        Log("Welcome to a Number Guesser App!");
        Log("Think of a number between 1 - 1000");
        Log("I will guess the number and you will press up if you number is higher, down if your number is lower and enter if I guess correctly!");
        Log($"Is your number: {guessedNumber}");
    }
    void Log(string msg) { Debug.Log(msg); }
    void NextGuess() {
        guessedNumber = (min + max) / 2;
        Log($"Is your number: {guessedNumber}"); }
}
