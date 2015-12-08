using UnityEngine;
using System.Collections;

public class TikiBossController : MonoBehaviour {

	public int health;
	public PlayerController player;
	public GameObject deathParticle;

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {

		if (health <= 0) {
			Destroy (gameObject);
			Instantiate(deathParticle, transform.position, transform.rotation);
			Instantiate(deathParticle, transform.position, transform.rotation);
			Instantiate(deathParticle, transform.position, transform.rotation);
		}
	
	}

	void OnCollisionEnter2D(Collision2D collision)
	{
		// Player revolver bullet
		if (collision.gameObject.tag == "RevolverBullet")
		{
			health -= 10;
		}

		// Player shotgun bullet
		if (collision.gameObject.tag == "ShotgunBullet")
		{
			health -= 5;
		}

		// Player rocket bullet
		if (collision.gameObject.tag == "RocketBullet") 
		{
			health -= 25;
		}
	}
}
