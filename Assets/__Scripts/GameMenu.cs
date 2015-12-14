using UnityEngine;
using System.Collections;

public class GameMenu : MonoBehaviour {

	public void OnStartClick() {
		Application.LoadLevel ("IntroScreen");
	}

	public void OnContinueClick() {
		Application.LoadLevel ("Level_One");
	}

	public void OnExitClick() {
		Application.Quit ();
	}
}
