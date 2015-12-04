using UnityEngine;
using System.Collections;

public class BossShootAtPlayerInRange : MonoBehaviour {

	public float playerRange;
	
	public GameObject fireball;
	
	public PlayerController player;
	
	public Transform launchPoint1;
	public Transform launchPoint2;
	public Transform launchPoint3;
	
	public float waitBetweenShots;

	private float shotCounter;

	private int typeOfShot;
	// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();
		shotCounter = waitBetweenShots;
		typeOfShot = 0;
	}
	
	// Update is called once per frame
	void Update () {
		shotCounter -= Time.deltaTime;
		typeOfShot = Random.Range (1, 6);	
		// Make sure that the player is on the left side of the boss 
		if (transform.localScale.x > 0 && 
		    player.transform.position.x < transform.position.x && 
		    player.transform.position.x > transform.position.x - playerRange &&
		    shotCounter < 0) 
		{
			if(typeOfShot == 1) {				// Single Mid Shot
				Instantiate(fireball, launchPoint2.position, launchPoint2.rotation);
				shotCounter = waitBetweenShots;
			} else if (typeOfShot == 2) {		// Double Shot (Mid and High)
				Instantiate(fireball, launchPoint1.position, launchPoint1.rotation);
				Instantiate(fireball, launchPoint2.position, launchPoint2.rotation);
				shotCounter = waitBetweenShots;
			} else if (typeOfShot == 3) {		// Single Low Show
				Instantiate(fireball, launchPoint3.position, launchPoint3.rotation);
				shotCounter = waitBetweenShots;
			} else if (typeOfShot == 4) {		// Double Shot (Low and Mid)
				Instantiate(fireball, launchPoint2.position, launchPoint2.rotation);
				Instantiate(fireball, launchPoint3.position, launchPoint3.rotation);
				shotCounter = waitBetweenShots;
			} else if (typeOfShot == 5) {		// Double Split Shot (Low and High)
				Instantiate(fireball, launchPoint1.position, launchPoint1.rotation);
				Instantiate(fireball, launchPoint3.position, launchPoint3.rotation);
				shotCounter = waitBetweenShots;
			}
		}
	}
}
