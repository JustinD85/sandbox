using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NumberWizard : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Welcome to Number Wizard, yaaaah");
        Debug.Log("Pick a number");
        Debug.Log("Highest Numbre you can choose is: 100");
        Debug.Log("Lowest Number you can choose is: 1");

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.UpArrow)) Debug.LogError("Key was pressed!");
    }
}
