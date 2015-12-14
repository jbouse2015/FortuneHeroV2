using UnityEngine;
using System.Collections;

public class PlayerTut : MonoBehaviour {

	// Use this for initialization
	public Transform other;
	void OnGUI() {
		GUI.skin.box.fontSize = 30;
		
		if (other) {
			float dist = Vector3.Distance(other.position, transform.position);
			if (dist < 2) {
				GUI.Box(new Rect(200, 50, 350, 210), "Level 1 \n Collect all the treasure \n" +
					"Use A, D to move\n W to jump\n Left Shift to run\n Left mouse or space key \n to fire");
			}
		}
	}
}
