using UnityEngine;
using System.Collections;

public class TikimanController : MonoBehaviour {

	public PlayerController player;

	public int health;

	public GameObject deathParticle;

	private bool facingLeft;

	// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();
		facingLeft = true;
		health = 50;
	}
	
	// Update is called once per frame
	void Update () {
		if (player.transform.position.x < transform.position.x && !facingLeft) {
			Flip ();
		} else if (player.transform.position.x > transform.position.x && facingLeft) {
			Flip();
		}

		if (health <= 0) {
			Destroy (gameObject);
			Instantiate (deathParticle, transform.position, transform.rotation);
		}
	
	}

	void OnCollisionEnter2D(Collision2D collision)
	{
		if (collision.gameObject.tag == "RevolverBullet") {
			health -= 10;
		}
	}

	void Flip() {
		facingLeft = !facingLeft;
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
}
