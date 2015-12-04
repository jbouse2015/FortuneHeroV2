using UnityEngine;
using System.Collections;

public class TikiBossFireController : MonoBehaviour {

	public float speed;
	
	public PlayerController player;
	
	public int damage;
	
	private Rigidbody2D fireball;

	private float destroyTimer = 3f;
	
	// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();
		fireball = GetComponent<Rigidbody2D> ();
		if (player.transform.position.x < transform.position.x) {
			speed = -speed;
		} else {
			Flip();
		}
	}
	
	// Update is called once per frame
	void Update () {
		fireball.velocity = new Vector2 (speed, fireball.velocity.y);
		Destroy (gameObject, destroyTimer);
	}
	
	void OnTriggerEnter2D(Collider2D other) {
		if (other.tag == "Player")
			Destroy (gameObject);
	}
	
	void OnCollisionEnter2D(Collision2D other) {
		if (other.gameObject.tag == "Floor")
			Destroy (gameObject);
	}
	
	void Flip() {
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
	
}
