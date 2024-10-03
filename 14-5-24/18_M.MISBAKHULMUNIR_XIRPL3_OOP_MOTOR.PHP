<?php
class Motor {
    private $warna;
    private $merek;
    private $model;

    public function __construct($warna, $merek, $model) {
        $this->warna = $warna;
        $this->merek = $merek;
        $this->model = $model;
    }

    public function bergerak() {
        echo "Motor bergerak\n";
    }

    public function berhenti() {
        echo "Motor berhenti\n";
    }

    public function getWarna() {
        return $this->warna;
    }

    public function setWarna($warna) {
        $this->warna = $warna;
    }

    public function getMerek() {
        return $this->merek;
    }

    public function setMerek($merek) {
        $this->merek = $merek;
    }

    public function getmodel() {
        return $this->model;
    }

    public function setModel($model) {
        $this->model = $model;
    }
}

$motorKu = new Motor("biru", "yamaha",model:"MX");

$motorKu->bergerak();
$motorKu->berhenti();

echo "<p>";

echo "Warna Motor: " . $motorKu->getWarna() . "\n";
$motorKu->setWarna("biru");
echo "Warna Motor setelah diubah: " . $motorKu->getWarna() . "\n";

echo "<p>";

echo "Merek Motor: " . $motorKu->getMerek() . "\n";
$motorKu->setMerek("Yamaha");
echo "Merek Motor setelah diubah: " . $motorKu->getMerek() . "\n";

echo "<p>";

echo "Model Motor: " . $motorKu->getModel() . "\n";
$motorKu->setmodel("MX King");
echo "Model Motor setelah diubah: " . $motorKu->getModel() . "\n";
?>
