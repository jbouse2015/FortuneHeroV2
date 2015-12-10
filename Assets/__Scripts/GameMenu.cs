using UnityEngine;
using System.Collections;

public class GameMenu : MonoBehaviour {

	public void OnStartClick() {
		Application.LoadLevel ("Level_One");
	}

	public void OnExitClick() {
		Application.Quit ();
	}
}
