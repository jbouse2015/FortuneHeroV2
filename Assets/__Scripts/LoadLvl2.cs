using UnityEngine;
using System.Collections;

public class LoadLvl2 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
       
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        Application.LoadLevel("Level_Two");
    }
}
