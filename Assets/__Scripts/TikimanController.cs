using UnityEngine;
using System.Collections;

public class TikimanController : MonoBehaviour {

	public PlayerController player;

	private bool facingLeft;

	// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();
		facingLeft = true;
	}
	
	// Update is called once per frame
	void Update () {
		if (player.transform.position.x < transform.position.x && !facingLeft) {
			Flip ();
		} else if (player.transform.position.x > transform.position.x && facingLeft) {
			Flip();
		}
	
	}

	void Flip() {
		facingLeft = !facingLeft;
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
}
