using UnityEngine;
using System.Collections;

public class PauseMenu : MonoBehaviour {
	
	// Use this for initialization
	public bool isPaused;
	
	public GameObject pauseMenu;
	
	public string mainMenu;
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Escape))
			isPaused = !isPaused;
		if (isPaused) {
			pauseMenu.SetActive(true);
			Time.timeScale = 0;
		} else {
			pauseMenu.SetActive(false);
			Time.timeScale = 1;
		}
		
	}
	
	public void Resume(){
		isPaused = false;
	}
	
	public void MainMenu(){
		
		Application.LoadLevel (mainMenu);
	}
}
