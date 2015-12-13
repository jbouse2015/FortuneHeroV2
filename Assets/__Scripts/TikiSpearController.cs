using UnityEngine;
using System.Collections;

public class TikiSpearController : MonoBehaviour {

	public float speed;

	public PlayerController player;

	public int damage;

	private Rigidbody2D spear;

	// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();
		spear = GetComponent<Rigidbody2D> ();
		if (player.transform.position.x < transform.position.x) {
			speed = -speed;
		} else {
			Flip();
		}
	}
	
	// Update is called once per frame
	void Update () {
		spear.velocity = new Vector2 (speed, spear.velocity.y);
		StartCoroutine (spearExpire ());

	}

	void OnTriggerEnter2D(Collider2D other) {
		if (other.tag == "Player")
			Destroy (gameObject);
	}

	void OnCollisionEnter2D(Collision2D other) {
		if (other.gameObject.tag == "Floor")
			Destroy (gameObject);
		if (other.gameObject.tag == "RevolverBullet") {
			Destroy (gameObject);
		}
		if (other.gameObject.tag == "Health") {
			Destroy (gameObject);
		}
		if (other.gameObject.tag == "Treasure") {
			Destroy (gameObject);
		}

	}

	IEnumerator spearExpire() {
		yield return new WaitForSeconds (2f);
		Destroy (gameObject);
	}

	void Flip() {
		Vector3 theScale = transform.localScale;
		theScale.x *= -1;
		transform.localScale = theScale;
	}
	
}
