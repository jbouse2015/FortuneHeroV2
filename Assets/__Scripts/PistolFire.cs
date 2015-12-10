using UnityEngine;
using System.Collections;

public class PistolFire : MonoBehaviour
{
    public GameObject bulletPrefab;
    public GameObject firingPoint;
    public GameObject cursorPosition;
    public GameObject explorerPosition;
    public PlayerController explorer;
    private AudioSource source;
    public AudioClip gunShot;
    public bool isPistol = true;

    // Use this for initialization
    void Start()
    {
        source = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        var rayX = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
        var rayY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;

        Vector2 newRay = new Vector2(rayX, rayY);
        Vector2 positionRay = new Vector2(transform.position.x, transform.position.y);
        Vector2 firePoint = new Vector2(firingPoint.transform.position.x, firingPoint.transform.position.y);
        if (explorer.isFacingRight() && firePoint.x < newRay.x)
            Debug.DrawRay(firePoint, newRay - firePoint, Color.blue);
        else if (!explorer.isFacingRight() && firePoint.x > newRay.x)
            Debug.DrawRay(firePoint, newRay - firePoint, Color.red);

        if (Input.GetKey("1"))
            isPistol = true;
        else if (Input.GetKey("2"))
            isPistol = false;

        
            if (Input.GetMouseButtonDown(0) || Input.GetKeyDown("space"))
            {
                //float newX = transform.position.x + 0
                //Vector3 rightPosition = new Vector3(transform.position.x+.4f,transform.position.y+.2f,transform.position.z);
                //Vector3 leftPosition = new Vector3(transform.position.x-.4f,transform.position.y-.2f,transform.position.z);
                GameObject bullet;
                Rigidbody2D exSpeed = explorer.getPlayer();
                Rigidbody2D speed;
                source.PlayOneShot(gunShot, 1.5f);				
                exSpeed = explorer.GetComponent<Rigidbody2D>();
                if (explorer.isFacingRight() && firePoint.x < newRay.x)
                {
                    bullet = Instantiate(bulletPrefab, firingPoint.transform.position, firingPoint.transform.rotation) as GameObject;
                    //var _rel = bullet.transform.TransformDirection(exSpeed.velocity.x,exSpeed.velocity.y,0);
                    //Vector2  v = bullet.
					
                    Vector2 bulletSpeed = new Vector2((newRay - firePoint).x, (newRay - firePoint).y).normalized;

                    speed = bullet.GetComponent<Rigidbody2D>();

                    //bulletSpeed += exSpeed.velocity;
                    //speed.velocity += bulletSpeed;
                    speed.AddForce(bulletSpeed * 500);
                    //speed.velocity = speed.velocity.normalized;
                    //speed.MoveRotation((float)(newRay-firePoint).x/(newRay-firePoint).y);
                    //speed.velocity = ((bulletSpeed*1)+exSpeed.velocity.normalized).normalized;
                    //bullet.transform.rotation = Quaternion.LookRotation(speed.velocity);
                    //speed.MoveRotation(Vector2.Angle(bulletSpeed,bulletSpeed+));
                    //speed.velocity += exSpeed.
                    //speed.velocity = 2 * speed.velocity.normalized;
                    //speed.AddForce(new Vector2((newRay-firePoint).x * 1, (newRay-firePoint).y * 1));
                    //speed.AddForce(newRay);
                    //speed.velocity = transform.right*15;
                    Debug.Log("Going Right");
                    Destroy(bullet, 15f);
                    //Debug.Log(explorer.isFacingRight())
                }
			else if (!explorer.isFacingRight() && firePoint.x > newRay.x)
                {
                    bullet = Instantiate(bulletPrefab, firingPoint.transform.position, firingPoint.transform.rotation) as GameObject;
                    speed = bullet.GetComponent<Rigidbody2D>();					

                    var bulletMove = new Vector2((newRay - firePoint).x * 1, (newRay - firePoint).y * 1).normalized;
                    Vector2 bulletSpeed = new Vector2((newRay - firePoint).x, (newRay - firePoint).y).normalized;
                    //speed.velocity = new Vector2((newRay-firePoint).x  * 1, (newRay-firePoint).y * 1).normalized;
                    speed.AddForce(bulletSpeed * 500);
                    //speed.velocity = 2 * speed.velocity.normalized;
                    //speed.velocity = transform.right*-15;
                    Debug.Log("Going Left");
                    Destroy(bullet, 15f);
                }
                //Debug.Log(explorer.isFacingRight());
                //Destroy (bullet,1);
            } 
        
    }

}
